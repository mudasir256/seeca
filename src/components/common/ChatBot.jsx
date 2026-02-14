import React, { useState, useRef, useEffect } from "react";

// Knowledge base about SEECA - Architecture & Interior Design
const knowledgeBase = {
  greeting: [
    "Hello! I'm the SEECA assistant. We're here to help bring your vision to life. How can I help you today?",
    "Hi! Welcome to SEECA. Ask me about our architecture, interior design, construction, or sustainability services.",
    "Greetings! I'm here to answer questions about SEECA. What would you like to know?",
  ],
  about: [
    "SEECA is a full-service Architecture and Interior Design studio. We provide a complete range of services to bring your vision to life—from concept and design to construction and sustainable building solutions. Our expertise spans architecture, interior design, construction management, building sustainability, and smart building technologies.",
    "We are an architecture and design studio focused on delivering individual, aesthetically stunning solutions. Our tagline is 'Bring Your Vision to Life'—we help you achieve the result you dreamed of.",
  ],
  services: [
    "We offer five main services:\n\n🏛️ Architecture – Planning, designing, and constructing buildings. We help you get the result you dreamed of.\n\n🛋️ Interior Design – Individual, aesthetically stunning solutions for your spaces.\n\n🏗️ Construction – Professional construction management from planning to execution.\n\n🌿 Building Sustainability – Sustainable design that meets today's needs without compromising the future.\n\n📡 Smart Building Technologies – Integrated technology solutions for modern buildings.\n\nVisit our Services page or ask about any specific service!",
  ],
  architecture: [
    "Our Architecture service covers the process and product of planning, designing, and constructing buildings or other physical structures. We help you get the result you dreamed of. You can learn more on our Architecture page.",
  ],
  interior: [
    "Interior Design at SEECA is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment. We deliver individual, aesthetically stunning solutions for our customers. Visit our Interior Design page for more.",
  ],
  construction: [
    "We provide professional construction management services ensuring quality, efficiency, and timely completion of projects from planning to execution. We create and produce design lines with a focus on quality. Check our Construction page for details.",
  ],
  sustainability: [
    "Our Building Sustainability focus is on meeting the needs of the present without compromising the ability of future generations to meet their needs. We combine sustainable design with practical solutions. See our Building Sustainability page for more.",
  ],
  smartBuilding: [
    "Smart Building Technologies at SEECA offer individual, aesthetically stunning solutions integrated with modern technology for efficient and intelligent buildings. Visit our Smart Building Technologies page to learn more.",
  ],
  contact: [
    "Contact SEECA:\n\n📧 Email: hello@SEECA.co\n\n📍 Head Office: 903-C, Maulana Shaukat Ali Road, Faisal Town, Lahore\n📞 +92 333 1498340\n📞 +92 324 7250008\n\n📍 Somalia Office: Downtown Hargeisa, Road # 01, Office # 01 Hargeisa, Somaliland\n📞 +252 633 8109 71\n📞 +252 634 6333 31\n\nYou can also use our Contact page or WhatsApp to get in touch.",
  ],
  email: [
    "Our email is hello@SEECA.co. Use it for general inquiries, project discussions, or to start a conversation. We'd love to hear from you!",
  ],
  address: [
    "Head Office: 903-C, Maulana Shaukat Ali Road, Faisal Town, Lahore, Pakistan.\n\nSomalia Office: Downtown Hargeisa, Road # 01, Office # 01 Hargeisa, Somaliland.",
  ],
  phone: [
    "Phone numbers:\n\nHead Office (Lahore):\n+92 333 1498340\n+92 324 7250008\n\nSomalia Office:\n+252 633 8109 71\n+252 634 6333 31\n\nYou can also reach us via WhatsApp.",
  ],
  projects: [
    "We work on a wide range of projects across architecture, interior design, construction, and sustainable building. Visit our Portfolio or Projects section to see our work, or tell us about your project and we can discuss how we can help.",
  ],
  portfolio: [
    "You can explore our portfolio on the website under Portfolio or Projects. We showcase our architecture, interior design, construction, and sustainability projects. Feel free to ask about a specific type of project!",
  ],
  process: [
    "We follow a structured process from concept to completion: understanding your vision, design and planning, and execution. You can read about our working process in detail on the Our Process page.",
  ],
  vision: [
    "Our vision is to bring your vision to life. We provide a full range of architecture and interior design services with a focus on quality, aesthetics, and sustainability.",
  ],
  default: [
    "I'm not sure about that. I can help with:\n\n• What SEECA does (architecture, interior, construction, sustainability, smart building)\n• Contact info (email hello@SEECA.co, phone, addresses)\n• Our services and process\n• Projects and portfolio\n\nAsk me something like 'What services do you offer?' or 'How can I contact you?'",
  ],
};

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();

  if (message.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
    return knowledgeBase.greeting[Math.floor(Math.random() * knowledgeBase.greeting.length)];
  }

  if (message.match(/\b(about|what is|who is|tell me about|seeca|company|intro|introduction)\b/)) {
    return knowledgeBase.about[Math.floor(Math.random() * knowledgeBase.about.length)];
  }

  if (message.match(/\b(service|services|what do you do|offer|offerings)\b/)) {
    return knowledgeBase.services[0];
  }

  if (message.match(/\b(architecture|architect)\b/)) {
    return knowledgeBase.architecture[0];
  }

  if (message.match(/\b(interior|interior design|design)\b/)) {
    return knowledgeBase.interior[0];
  }

  if (message.match(/\b(construction|build|building)\b/)) {
    return knowledgeBase.construction[0];
  }

  if (message.match(/\b(sustainability|sustainable|green|eco)\b/)) {
    return knowledgeBase.sustainability[0];
  }

  if (message.match(/\b(smart building|smart building technologies|technology)\b/)) {
    return knowledgeBase.smartBuilding[0];
  }

  if (message.match(/\b(contact|reach|get in touch|how to contact|where are you)\b/)) {
    return knowledgeBase.contact[0];
  }

  if (message.match(/\b(email|e-mail|mail|hello@)\b/)) {
    return knowledgeBase.email[0];
  }

  if (message.match(/\b(address|location|where|office|head office|lahore|somalia|hargeisa)\b/)) {
    return knowledgeBase.address[0];
  }

  if (message.match(/\b(phone|telephone|call|mobile|number|whatsapp)\b/)) {
    return knowledgeBase.phone[0];
  }

  if (message.match(/\b(project|projects|work|portfolio)\b/)) {
    return knowledgeBase.projects[0];
  }

  if (message.match(/\b(process|how do you work|workflow)\b/)) {
    return knowledgeBase.process[0];
  }

  if (message.match(/\b(vision|mission|goal)\b/)) {
    return knowledgeBase.vision[0];
  }

  return knowledgeBase.default[0];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the SEECA assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const primaryColor = "#73bf44";
  const primaryDark = "#5fa338";

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="seeca-chatbot-fab"
          aria-label="Open chat with SEECA"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "56px",
            height: "56px",
            backgroundColor: primaryColor,
            borderRadius: "50%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(115, 191, 68, 0.4)",
            zIndex: 9998,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(115, 191, 68, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(115, 191, 68, 0.4)";
          }}
        >
          <i className="fas fa-comments" style={{ color: "#fff", fontSize: "24px" }} />
        </button>
      )}

      {isOpen && (
        <div
          className="seeca-chatbot-window"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "360px",
            maxWidth: "calc(100vw - 40px)",
            height: "500px",
            maxHeight: "calc(100vh - 40px)",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "inherit",
          }}
        >
          <div className="seeca-chatbot-header" style={{
            backgroundColor: primaryColor,
            color: "#fff",
            padding: "14px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "16px 16px 0 0",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-comments" style={{ fontSize: "20px" }} />
              <div>
                <h3 style={{ margin: 0, fontSize: "15px", fontWeight: "600" }}>SEECA</h3>
                <p style={{ margin: 0, fontSize: "11px", opacity: 0.95 }}>Ask me anything</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="seeca-chatbot-close"
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "18px",
                padding: "8px",
                lineHeight: 1,
                minWidth: "44px",
                minHeight: "44px",
              }}
              aria-label="Close chat"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          <div
            className="seeca-chatbot-messages"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`seeca-chatbot-row ${msg.sender}`}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                {msg.sender === "bot" && (
                  <div
                    className="seeca-chatbot-avatar bot"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: primaryColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-comments" style={{ color: "#fff", fontSize: "12px" }} />
                  </div>
                )}
                <div
                  className="seeca-chatbot-bubble"
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: msg.sender === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    backgroundColor: msg.sender === "user" ? primaryColor : "#fff",
                    color: msg.sender === "user" ? "#fff" : "#333",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div
                    className="seeca-chatbot-avatar user"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-user" style={{ color: "#666", fontSize: "12px" }} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="seeca-chatbot-form"
            onSubmit={handleSendMessage}
            style={{
              padding: "12px",
              backgroundColor: "#fff",
              borderTop: "1px solid #e8e8e8",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="text"
              className="seeca-chatbot-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "10px 14px",
                border: "1px solid #e0e0e0",
                borderRadius: "22px",
                fontSize: "13px",
                outline: "none",
                minWidth: 0,
              }}
              onFocus={(e) => {
                e.target.style.borderColor = primaryColor;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
              }}
            />
            <button
              type="submit"
              className="seeca-chatbot-send"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: primaryColor,
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = primaryDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
              }}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        /* Tablet and below */
        @media (max-width: 768px) {
          .seeca-chatbot-window {
            width: calc(100vw - 32px) !important;
            max-width: 400px !important;
            right: 16px !important;
            bottom: 16px !important;
            left: 16px !important;
            margin-left: auto !important;
            height: min(500px, calc(100vh - 32px)) !important;
            max-height: calc(100vh - 32px) !important;
          }
          .seeca-chatbot-fab {
            bottom: 88px !important;
            right: 16px !important;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .seeca-chatbot-window {
            width: 100% !important;
            max-width: 100% !important;
            right: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            margin-left: 0 !important;
            height: 100% !important;
            max-height: 100dvh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
          .seeca-chatbot-window .seeca-chatbot-header {
            border-radius: 0 !important;
            padding: 12px 16px !important;
            padding-left: calc(16px + env(safe-area-inset-left)) !important;
            padding-right: calc(16px + env(safe-area-inset-right)) !important;
          }
          .seeca-chatbot-messages {
            padding: 12px !important;
            padding-left: calc(12px + env(safe-area-inset-left)) !important;
            padding-right: calc(12px + env(safe-area-inset-right)) !important;
          }
          .seeca-chatbot-form {
            padding: 10px 12px !important;
            padding-left: calc(12px + env(safe-area-inset-left)) !important;
            padding-right: calc(12px + env(safe-area-inset-right)) !important;
            padding-bottom: calc(10px + env(safe-area-inset-bottom)) !important;
          }
          .seeca-chatbot-bubble {
            max-width: 85% !important;
            font-size: 14px !important;
          }
          .seeca-chatbot-fab {
            right: calc(12px + env(safe-area-inset-right, 0px)) !important;
            bottom: calc(76px + env(safe-area-inset-bottom, 0px)) !important;
            width: 44px !important;
            height: 44px !important;
          }
          .seeca-chatbot-fab i {
            font-size: 18px !important;
          }
        }

        /* Prevent iOS zoom on input focus - 16px minimum */
        .seeca-chatbot-input {
          font-size: 13px;
        }
        @media (max-width: 480px) {
          .seeca-chatbot-input {
            font-size: 16px !important;
          }
          .seeca-chatbot-send {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
          }
        }

        /* Small phones - tighter layout */
        @media (max-width: 360px) {
          .seeca-chatbot-bubble {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
          .seeca-chatbot-avatar.bot,
          .seeca-chatbot-avatar.user {
            width: 24px !important;
            height: 24px !important;
          }
          .seeca-chatbot-avatar.bot i,
          .seeca-chatbot-avatar.user i {
            font-size: 10px !important;
          }
        }

        /* Touch-friendly close button on mobile */
        @media (max-width: 480px) {
          .seeca-chatbot-close {
            min-width: 44px !important;
            min-height: 44px !important;
            padding: 10px !important;
          }
        }
      `}} />
    </>
  );
}
