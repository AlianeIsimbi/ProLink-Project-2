import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  MessageCircle, 
  Send, 
  Users, 
  Hash, 
  Smile, 
  Paperclip, 
  MoreVertical,
  Search,
  Filter,
  Plus,
  User,
  Clock,
  ThumbsUp,
  Reply,
  Share2
} from "lucide-react";

export function CollaborationHub({ userData }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Marie K.",
      role: "Graduate",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      message: "Just got hired at Tech Solutions! Anyone else working in software development?",
      timestamp: "2 hours ago",
      likes: 12,
      replies: 3,
      category: "success"
    },
    {
      id: 2,
      user: "Jean P.",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      message: "Looking for study partners for the Computer Programming program at KIST. Anyone interested?",
      timestamp: "4 hours ago",
      likes: 8,
      replies: 5,
      category: "study"
    },
    {
      id: 3,
      user: "Grace M.",
      role: "Institution",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      message: "We have new openings for Automotive Engineering students. Apply now!",
      timestamp: "6 hours ago",
      likes: 15,
      replies: 8,
      category: "opportunity"
    },
    {
      id: 4,
      user: "David R.",
      role: "Company",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      message: "Rwanda Motors is hiring skilled technicians. Great benefits and growth opportunities!",
      timestamp: "8 hours ago",
      likes: 20,
      replies: 12,
      category: "hiring"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);

  const categories = [
    { id: "all", name: "All", count: messages.length },
    { id: "success", name: "Success Stories", count: messages.filter(m => m.category === "success").length },
    { id: "study", name: "Study Groups", count: messages.filter(m => m.category === "study").length },
    { id: "opportunity", name: "Opportunities", count: messages.filter(m => m.category === "opportunity").length },
    { id: "hiring", name: "Hiring", count: messages.filter(m => m.category === "hiring").length }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || message.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: userData ? `${userData.firstName} ${userData.lastName}` : "Anonymous",
        role: userData ? userData.type : "User",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        message: newMessage,
        timestamp: "Just now",
        likes: 0,
        replies: 0,
        category: "general"
      };
      setMessages([message, ...messages]);
      setNewMessage("");
    }
  };

  const handleLike = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { ...msg, likes: msg.likes + 1 }
        : msg
    ));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Collaboration Hub</h2>
            <p className="text-sm text-gray-600">Connect, learn, and share opportunities with the community</p>
          </div>
          <Button size="sm" className="bg-primary hover:bg-rust-700">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((message) => (
          <Card key={message.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <img
                  src={message.avatar}
                  alt={message.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{message.user}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        message.role === 'graduate' ? 'bg-green-100 text-green-700' :
                        message.role === 'student' ? 'bg-blue-100 text-blue-700' :
                        message.role === 'institution' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {message.role}
                    </Badge>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{message.message}</p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(message.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">{message.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors">
                      <Reply className="h-4 w-4" />
                      <span className="text-sm">{message.replies}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <div className="flex-1 relative">
            <Input
              placeholder="Share your thoughts, ask questions, or post opportunities..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="pr-12"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <button type="button" className="text-gray-400 hover:text-gray-600">
                <Smile className="h-4 w-4" />
              </button>
              <button type="button" className="text-gray-400 hover:text-gray-600">
                <Paperclip className="h-4 w-4" />
              </button>
            </div>
          </div>
          <Button type="submit" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
