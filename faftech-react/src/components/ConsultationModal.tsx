import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { FiSend, FiX, FiCpu, FiUser, FiSmartphone, FiClock, FiShield, FiZap, FiChevronDown } from 'react-icons/fi';
import './styles/modal.css'
import { streamMistralAI } from '../services/ai';
import { setHandleSend } from './sendHandler';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const URL = `${import.meta.env.VITE_URL_HOST}/api`;

interface Message {
  id?: number;
  sender: 'User' | 'AI';
  text: string;
  timestamp?: string;
  isStreaming?: boolean;
}

interface Props {
  show: boolean;
  onClose: () => void;
}

// Custom components for ReactMarkdown
const MarkdownComponents = {
  code({ node, inline, className, children, ...props }: any) {
    const raw = String(children);
    const match = /language-(\w+)/.exec(className || '');
    const lang = match?.[1] || 'text';
    const code = raw.replace(/\n$/, '');

    // Check if this is inline code (single backtick)
    // Inline if: ReactMarkdown says it's inline OR content is short (≤50 chars) without newlines
    const isInline = inline || (code.length <= 50 && !code.includes('\n'));
    
    if (isInline) {
      return <span className="ai-inline-highlight">{children}</span>;
    }
    
    // If it's a code block (triple backticks), render with CodeWithCopy
    return <CodeWithCopy language={lang} code={code} />;
  },
  table({ children }: any) {
    return (
      <div className="ai-table-container">
        <table className="ai-table">{children}</table>
      </div>
    );
  },
  thead({ children }: any) {
    return <thead className="ai-table-head">{children}</thead>;
  },
  tbody({ children }: any) {
    return <tbody className="ai-table-body">{children}</tbody>;
  },
  tr({ children }: any) {
    return <tr className="ai-table-row">{children}</tr>;
  },
  th({ children }: any) {
    return <th className="ai-table-header">{children}</th>;
  },
  td({ children }: any) {
    return <td className="ai-table-cell">{children}</td>;
  },
};

const CodeWithCopy = ({ language, code }: { language: string; code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="ai-code-block">
      <div className="ai-code-header">
        <span className="ai-code-lang">{language}</span>
        <button onClick={handleCopy} className="ai-code-copy">
          {copied ? 'COPIED!' : 'COPY'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ margin: 0, backgroundColor: 'transparent', fontSize: '0.75rem' }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const ConsultationModal: React.FC<Props> = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 0);
    }
  }, [show]);

  const [selectedLLM, setSelectedLLM] = useState('mistral-medium');
  const [selectedLabel, setSelectedLabel] = useState('Mistral Medium');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  
  const modelOptions = [
    { 
      value: 'mistral-medium', 
      label: 'Mistral Medium',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/960px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png'
    },
    { 
      value: 'deepseek-r1-distill-llama-70b', 
      label: 'DeepSeek-R1 70B',
      logo: 'https://avatars.githubusercontent.com/u/148330874?s=200&v=4'
    },
    { 
      value: 'llama-3.3-70b-versatile', 
      label: 'Llama-3.3 70B',
      logo: 'https://www.citypng.com/public/uploads/preview/facebook-meta-logo-icon-hd-png-701751694777703xqxtpvbu9q.png'
    },
    { 
      value: 'qwen/qwen3-32b', 
      label: 'Qwen-3 32B',
      logo: 'https://avatars.githubusercontent.com/u/141221163?s=200&v=4'
    },
  ];
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  const getTimestamp = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (text?: string) => {
    let content = text?.trim() || message.trim();
    if (!content) return;

    const userMessage: Message = { 
      sender: 'User', 
      text: content,
      timestamp: getTimestamp()
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setTimeout(() => scrollToBottom(), 100);
    setIsStreaming(true);

    // Add empty AI message with streaming flag
    const aiResponse: Message = { 
      sender: 'AI', 
      text: '',
      timestamp: getTimestamp(),
      isStreaming: true
    };
    setMessages((prev) => [...prev, aiResponse]);

    let streamedText = '';

    const updateAIMessage = (chunk: string) => {
      streamedText += chunk;
      setMessages((prev) => {
        const newMessages = [...prev];
        const last = newMessages[newMessages.length - 1];
        if (last.sender === 'AI') {
          last.text = streamedText;
        }
        return newMessages;
      });
      // Only auto-scroll if user is near the bottom
      if (chatAreaRef.current) {
        const chatArea = chatAreaRef.current;
        const isNearBottom = chatArea.scrollHeight - chatArea.scrollTop - chatArea.clientHeight < 150;
        if (isNearBottom) {
          messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
        }
      }
    };

    await streamMistralAI(
      selectedLLM,
      content,
      updateAIMessage,
      messages.map(msg => ({
        role: msg.sender === 'User' ? 'user' : 'assistant',
        content: msg.text
      }))
    );
    
    // Mark streaming as complete
    setMessages((prev) => {
      const newMessages = [...prev];
      const last = newMessages[newMessages.length - 1];
      if (last.sender === 'AI') {
        last.isStreaming = false;
      }
      return newMessages;
    });
    setIsStreaming(false);
  };

  useEffect(() => {
    setHandleSend(handleSend);
  }, []);

  const sessionId = `0X-${Date.now().toString(36).toUpperCase().slice(-4)}-${Math.random().toString(36).toUpperCase().slice(-2)}`;

  return (
    <div className={`ai-modal-overlay ${show ? 'active' : ''}`} onClick={onClose}>
      <div className="ai-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <header className="ai-modal-header">
          <div className="ai-header-brand">
            <div className="ai-logo">
              <FiCpu className="ai-logo-icon" />
            </div>
            <h1 className="ai-title">
              FAF TECH
              <span className="ai-title-sub">// AI ASSISTANT SYSTEM</span>
            </h1>
          </div>
          
          <div className="ai-header-controls">
            {/* Model Selector Dropdown */}
            <div className="ai-model-dropdown-container">
              <button 
                className="ai-model-dropdown-trigger"
                onClick={() => setShowModelDropdown(!showModelDropdown)}
              >
                <img 
                  src={modelOptions.find(m => m.value === selectedLLM)?.logo} 
                  alt={selectedLabel}
                  className="ai-model-logo"
                />
                <span className="ai-model-dropdown-label">{selectedLabel}</span>
                <FiChevronDown className={`ai-model-dropdown-icon ${showModelDropdown ? 'open' : ''}`} />
              </button>
              
              {showModelDropdown && (
                <div className="ai-model-dropdown-menu">
                  {modelOptions.map((model) => (
                    <button
                      key={model.value}
                      className={`ai-model-dropdown-item ${selectedLLM === model.value ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLLM(model.value);
                        setSelectedLabel(model.label);
                        setMessages([]);
                        setShowModelDropdown(false);
                      }}
                    >
                      <img 
                        src={model.logo} 
                        alt={model.label}
                        className="ai-model-dropdown-logo"
                      />
                      <span className="ai-model-dropdown-item-name">{model.label}</span>
                      {selectedLLM === model.value && (
                        <span className="ai-model-dropdown-item-check"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="ai-status-badge">
              <div className="ai-status-dot pulse-ring"></div>
              <span className="ai-status-text">SYSTEM ACTIVE</span>
            </div>
            <button className="ai-close-btn" onClick={onClose}>
              <FiX />
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="ai-chat-area" ref={chatAreaRef}>
          {/* Session ID */}
          <div className="ai-session-badge">
            <span>SESSION ID: {sessionId} // {new Date().toISOString().split('T')[0].replace(/-/g, '.')}</span>
          </div>

          {/* Empty State with Welcome */}
          {messages.length === 0 && (
            <>
              {/* AI Welcome */}
              <div className="ai-chat-message ai-chat-ai">
                <div className="ai-avatar">
                  <img 
                    src={modelOptions.find(m => m.value === selectedLLM)?.logo} 
                    alt={selectedLabel}
                    className="ai-avatar-logo"
                  />
                </div>
                <div className="ai-message-body">
                  <div className="ai-message-meta">
                    <span className="ai-sender-name">FAF_TECH_CORE</span>
                    <span className="ai-timestamp">{getTimestamp()}</span>
                  </div>
                  <div className="ai-message-content ai-message-content-ai">
                    <div className="ai-glow-overlay"></div>
                    <p>Identity verified. Secure channel established. I am ready to assist you with coding, technical questions, or any other inquiries.</p>
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="ai-suggestions-grid">
                {[
                  { icon: <FiZap />, text: 'Explain neural networks in simple terms' },
                  { icon: <FiClock />, text: 'How to learn coding effectively?' },
                  { icon: <FiCpu />, text: 'Generate a React button component' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="ai-suggestion-item"
                    onClick={() => handleSend(item.text)}
                  >
                    <div className="ai-suggestion-icon">{item.icon}</div>
                    <p className="ai-suggestion-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Messages */}
          {messages.map((msg, index) => (
            <div 
              key={index}
              className={`ai-chat-message ${msg.sender === 'User' ? 'ai-chat-user' : 'ai-chat-ai'}`}
            >
              {/* Avatar - Left for AI, Right for User */}
              {msg.sender === 'AI' ? (
                <div className="ai-avatar">
                  <img 
                    src={modelOptions.find(m => m.value === selectedLLM)?.logo} 
                    alt={selectedLabel}
                    className="ai-avatar-logo"
                  />
                </div>
              ) : (
                <div className="ai-avatar ai-avatar-user">
                  <FiUser className="ai-avatar-icon" />
                </div>
              )}
              
              <div className="ai-message-body">
                {/* Meta */}
                <div className={`ai-message-meta ${msg.sender === 'User' ? 'ai-message-meta-user' : ''}`}>
                  <span className="ai-sender-name">
                    {msg.sender === 'User' ? 'OPERATOR' : selectedLabel.toUpperCase().replace(/ /g, '_')}
                  </span>
                  <span className="ai-timestamp">{msg.timestamp}</span>
                </div>
                
                {/* Content */}
                <div className={`ai-message-content ${msg.sender === 'User' ? 'ai-message-content-user' : 'ai-message-content-ai'}`}>
                  {msg.sender === 'AI' ? (
                    <>
                      <div className="ai-glow-overlay"></div>
                      {msg.isStreaming && msg.text === '' ? (
                        // Show typing indicator when streaming starts
                        <div className="ai-typing">
                          <div className="ai-typing-bar"></div>
                          <div className="ai-typing-bar"></div>
                          <div className="ai-typing-bar"></div>
                        </div>
                      ) : (
                        <ReactMarkdown 
                          components={MarkdownComponents}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      )}
                    </>
                  ) : (
                    <p>{msg.text}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Footer / Input */}
        <footer className="ai-footer">
          {/* Input */}
          <div className="ai-input-group">
            <button className="ai-attach-btn">
              <span>+</span>
            </button>
            <textarea
              className="ai-textarea"
              rows={1}
              placeholder="Enter command or query..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button 
              className="ai-send-button"
              onClick={() => handleSend(message)}
              disabled={!message.trim()}
            >
              <FiSend />
            </button>
          </div>
          
          {/* Footer Meta */}
          <div className="ai-footer-meta">
            <div className="ai-footer-left">
              <span className="ai-secure">
                <FiShield className="ai-footer-icon" />
                ENCRYPTED_TLS_1.3
              </span>
            </div>
            <div className="ai-footer-center">
              <span>Send [Enter] | Multiline [Shift + Enter]</span>
            </div>
            <div className="ai-footer-right">
              <span>FAF TECH INTELLIGENCE v2.0</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ConsultationModal;
