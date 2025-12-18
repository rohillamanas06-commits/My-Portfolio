import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { personalInfo, projects, skills } from '@/data/portfolio';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Manas's AI assistant. Ask me anything about Manas - his projects, skills, contact info, or to schedule a call!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getContext = () => {
    return `You are an AI assistant representing Manas Rohilla. Here's information about him:

Personal Info:
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Email: ${personalInfo.email}
- Location: ${personalInfo.location}
- University: ${personalInfo.university}
- Year: ${personalInfo.year}
- Degree: ${personalInfo.degree}
- About: ${personalInfo.about}
- GitHub: ${personalInfo.github}
- LinkedIn: ${personalInfo.linkedin}
- Instagram: ${personalInfo.instagram}
- Phone: +91 8396026450

Projects:
${projects.map(p => `- ${p.title}: ${p.description} (${p.technologies.join(', ')})`).join('\n')}

Skills:
${Object.entries(skills).map(([category, skillList]) => 
  `${category}: ${skillList.map((s: any) => s.name).join(', ')}`
).join('\n')}

Answer questions about Manas professionally and helpfully. If asked to schedule a call, provide his phone number and email. Keep responses concise and friendly.`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not found');
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `${getContext()}\n\nUser question: ${userMessage}`
              }]
            }]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMsg = errorData.error?.message || 'API request failed';
        
        // Handle overloaded model
        if (errorMsg.includes('overloaded')) {
          throw new Error('The AI is currently busy. Please try again in a moment.');
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      const assistantMessage = data.candidates[0]?.content?.parts[0]?.text || 
        "I apologize, but I couldn't generate a response. Please try again.";

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : '';
      
      // Check if it's a rate limit error
      let fallbackMessage = '';
      
      if (errorMessage.includes('Quota exceeded') || errorMessage.includes('rate')) {
        fallbackMessage = '⏱️ API rate limit reached. Please wait 1 minute and try again.';
      } else if (userMessage.toLowerCase().includes('contact') || userMessage.toLowerCase().includes('email') || userMessage.toLowerCase().includes('call')) {
        fallbackMessage = `📧 ${personalInfo.email}\n📱 +91 8396026450`;
      } else if (userMessage.toLowerCase().includes('project')) {
        fallbackMessage = `Please check the Projects section above.`;
      } else {
        fallbackMessage = `Please explore the portfolio sections above for more info.`;
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: fallbackMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <GlassCard hover={false} className="h-[500px] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="font-semibold text-foreground">Chat with Manas's AI</h3>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground p-3 rounded-lg">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 min-w-0 px-4 py-2 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex-shrink-0 p-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
