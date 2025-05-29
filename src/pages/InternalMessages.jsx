import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InternalMessages = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activeTab, setActiveTab] = useState("inbox");
  const [messages, setMessages] = useState({
    inbox: [],
    sent: [],
    drafts: [],
    archived: [],
  });
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [composeOpen, setComposeOpen] = useState(false);
  const [newMessage, setNewMessage] = useState({
    to: "",
    subject: "",
    body: "",
  });

  // Simulate fetching messages
  useEffect(() => {
    // In a real app, you would fetch these from an API
    const demoMessages = {
      inbox: [
        {
          id: "inbox-1",
          from: "John Doe",
          subject: "Project Deadline Update",
          body: "The deadline for the current project has been extended by one week.",
          time: "10:30 AM",
          date: "Today",
          isUnread: true,
          isImportant: true,
        },
        {
          id: "inbox-2",
          from: "HR Department",
          subject: "Office Policy Update",
          body: "Please review the updated office policies attached.",
          time: "Yesterday",
          date: "Nov 19",
          isUnread: false,
          isImportant: false,
        },
      ],
      sent: [
        {
          id: "sent-1",
          to: "Project Team",
          subject: "Meeting Minutes",
          body: "Attached are the minutes from yesterday's meeting.",
          time: "9:15 AM",
          date: "Today",
          isImportant: false,
        },
      ],
      drafts: [
        {
          id: "draft-1",
          to: "Accounting",
          subject: "Expense Report Query",
          body: "I have a question about the expense report from last quarter...",
          time: "Nov 15",
          date: "Nov 15",
          isImportant: false,
        },
      ],
      archived: [],
    };

    setMessages(demoMessages);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleAction = (action, messageId) => {
    console.log(`${action} message ${messageId}`);
    // Here you would implement the actual action logic
    setOpenDropdownId(null); // Close the dropdown after action

    // Example action implementation
    if (action === "markAsRead") {
      setMessages((prev) => ({
        ...prev,
        inbox: prev.inbox.map((msg) =>
          msg.id === messageId ? { ...msg, isUnread: false } : msg
        ),
      }));
    } else if (action === "delete") {
      setMessages((prev) => ({
        ...prev,
        inbox: prev.inbox.filter((msg) => msg.id !== messageId),
      }));
    }
  };

  const toggleSelectMessage = (id) => {
    setSelectedMessages((prev) =>
      prev.includes(id) ? prev.filter((msgId) => msgId !== id) : [...prev, id]
    );
  };

  const selectAllMessages = () => {
    const currentTabMessages = messages[activeTab];
    if (selectedMessages.length === currentTabMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(currentTabMessages.map((msg) => msg.id));
    }
  };

  const handleComposeSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    console.log("Sending message:", newMessage);

    // Add to sent items
    const sentMessage = {
      id: `sent-${Date.now()}`,
      to: newMessage.to,
      subject: newMessage.subject,
      body: newMessage.body,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: "Today",
      isImportant: false,
    };

    setMessages((prev) => ({
      ...prev,
      sent: [sentMessage, ...prev.sent],
    }));

    // Reset form and close
    setNewMessage({ to: "", subject: "", body: "" });
    setComposeOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-[1148px] mx-auto">
        {/* Messages Header */}
        <div className="w-full max-w-[1148px]">
          <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold">
              Internal Messages
            </h3>
            <button
              onClick={() => setComposeOpen(true)}
              className="px-8 py-2 md:px-12 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
              bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
              hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Compose
            </button>
          </div>
        </div>

        {/* Compose Message Modal */}
        {composeOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-[20px] shadow-xl w-full max-w-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">New Message</h3>
                  <button
                    onClick={() => setComposeOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleComposeSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMessage.to}
                      onChange={(e) =>
                        setNewMessage({ ...newMessage, to: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newMessage.subject}
                      onChange={(e) =>
                        setNewMessage({
                          ...newMessage,
                          subject: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                      value={newMessage.body}
                      onChange={(e) =>
                        setNewMessage({ ...newMessage, body: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setComposeOpen(false)}
                      className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 text-white rounded-lg font-medium 
                        bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
                        hover:opacity-80 transition-all duration-200"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-[20px] shadow-md mb-6 mt-6">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {["inbox", "sent", "drafts", "archived"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab} ({messages[tab].length})
                </button>
              ))}
            </nav>
          </div>

          {/* Messages List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 capitalize">
                {activeTab}
              </h2>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={
                    selectedMessages.length > 0 &&
                    selectedMessages.length === messages[activeTab].length
                  }
                  onChange={selectAllMessages}
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-blue-600 font-medium">
                  Select all
                </span>
              </label>
            </div>

            {messages[activeTab].length === 0 ? (
              <div className="text-center py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No messages in {activeTab}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === "inbox"
                    ? "You'll see new messages here when you receive them."
                    : activeTab === "sent"
                    ? "Messages you send will appear here."
                    : "Save draft messages to see them here."}
                </p>
                {activeTab === "inbox" && (
                  <button
                    onClick={() => setComposeOpen(true)}
                    className="mt-4 px-6 py-2 text-white rounded-lg font-medium text-sm 
                      bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
                      hover:opacity-80 transition-all duration-200"
                  >
                    Compose New Message
                  </button>
                )}
              </div>
            ) : (
              messages[activeTab].map((message) => (
                <div
                  key={message.id}
                  className={`border-b border-gray-100 py-4 last:border-0 relative ${
                    message.isUnread ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Checkbox */}
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        checked={selectedMessages.includes(message.id)}
                        onChange={() => toggleSelectMessage(message.id)}
                        className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                    </div>

                    {/* Sender/Receiver Info */}
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    {/* Message Content */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link
                          to={`/message-detail/${message.id}`}
                          className="flex-1"
                        >
                          <div className="flex items-center gap-2">
                            {message.isImportant && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                            <p
                              className={`font-medium ${
                                message.isUnread
                                  ? "text-blue-600"
                                  : "text-gray-800"
                              }`}
                            >
                              {activeTab === "inbox"
                                ? message.from
                                : message.to}
                            </p>
                          </div>
                          <p className="text-gray-800 mt-1">
                            {message.subject}
                          </p>
                          <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                            {message.body.substring(0, 100)}...
                          </p>
                        </Link>
                        <div className="flex items-center gap-2 ml-4">
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {message.time}
                          </span>
                          {/* Vertical Dotted Menu */}
                          <button
                            className="text-gray-400 hover:text-gray-600 relative"
                            onClick={() => toggleDropdown(message.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {openDropdownId === message.id && (
                    <div className="absolute right-0 top-12 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {message.isUnread && (
                        <button
                          onClick={() => handleAction("markAsRead", message.id)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => handleAction("reply", message.id)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Reply
                      </button>
                      <button
                        onClick={() => handleAction("forward", message.id)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Forward
                      </button>
                      <button
                        onClick={() => handleAction("archive", message.id)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Archive
                      </button>
                      <button
                        onClick={() => handleAction("delete", message.id)}
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalMessages;
