import { createContext, useContext, useState } from 'react';

const ChatbarContext = createContext();

export const ChatbarProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatbar = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <ChatbarContext.Provider value={{ isChatOpen, toggleChatbar }}>
      {children}
    </ChatbarContext.Provider>
  );
};

export const useChatbar = () => useContext(ChatbarContext);
