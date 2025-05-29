import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

const MessageDetail = () => {
  const { id } = useParams();
  const [replyText, setReplyText] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [isForwarding, setIsForwarding] = useState(false);
  const [forwardTo, setForwardTo] = useState("");

  // In a real app, this would come from an API call using the message id
  const message = {
    id: id || "1",
    from: "John Doe (HR Department)",
    to: "You",
    subject: "Important: Company Policy Updates",
    date: "Friday, Nov 11",
    time: "10:00am",
    body: [
      "Dear Team,",
      "",
      "We're writing to inform you about important updates to our company policies that will take effect starting next month. The changes primarily affect our remote work policy and expense reimbursement procedures.",
      "",
      "Key changes include:",
      "- Updated remote work approval process",
      "- New expense reporting deadlines",
      "- Revised travel policy guidelines",
      "",
      "Please review the attached documents carefully and reach out to the HR department if you have any questions.",
      "",
      "Best regards,",
      "John Doe",
      "HR Manager",
    ].join("\n"),
    attachments: [
      { name: "Updated_Policy_2023.pdf", size: "2.4MB" },
      { name: "Expense_Report_Form.docx", size: "1.1MB" },
    ],
    isRead: true,
    isImportant: true,
    thread: [
      {
        id: "2",
        from: "You",
        to: "John Doe (HR Department)",
        date: "Friday, Nov 11",
        time: "2:30pm",
        body: "Thank you for the update. I've reviewed the documents and everything looks clear.",
      },
      {
        id: "3",
        from: "John Doe (HR Department)",
        to: "You",
        date: "Friday, Nov 11",
        time: "3:45pm",
        body: "Glad to hear that. Don't hesitate to reach out if any questions come up later.",
      },
    ],
  };

  const handleReply = () => {
    if (replyText.trim()) {
      // In a real app, this would send to your API
      const newReply = {
        id: Date.now().toString(),
        from: "You",
        to: message.from,
        date: new Date().toLocaleDateString([], {
          weekday: "long",
          month: "short",
          day: "numeric",
        }),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        body: replyText,
      };

      message.thread.push(newReply);
      setReplyText("");
      setIsReplying(false);
    }
  };

  const handleForward = () => {
    if (forwardTo.trim()) {
      // In a real app, this would send to your API
      console.log(`Forwarding message ${id} to ${forwardTo}`);
      setIsForwarding(false);
      setForwardTo("");
    }
  };

  const downloadAttachment = (fileName) => {
    // In a real app, this would download the actual file
    console.log(`Downloading ${fileName}`);
  };

  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="max-w-[1148px] mx-auto">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-base md:text-lg font-bold">
              {message.subject}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              From: {message.from} | To: {message.to}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsReplying(true)}
              className="px-4 py-2 md:px-6 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
              bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
              hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Reply
            </button>
            <button
              onClick={() => setIsForwarding(true)}
              className="px-4 py-2 md:px-6 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
              bg-gradient-to-r from-[#384295] to-[#14ADD6] shadow-md 
              hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Forward
            </button>
          </div>
        </div>

        {/* Main Message Content */}
        <div className="bg-white p-5 md:p-8 rounded-[20px] shadow-md mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-4 font-semibold text-sm md:text-base mb-2">
                <span>{message.date}</span>
                <span>{message.time}</span>
                {message.isImportant && (
                  <span className="flex items-center text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Important
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="whitespace-pre-line text-gray-700 mb-8 leading-relaxed">
            {message.body}
          </div>

          {/* Attachments */}
          {message.attachments?.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-medium text-gray-700 mb-3">
                Attachments ({message.attachments.length})
              </h4>
              <div className="space-y-2">
                {message.attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => downloadAttachment(file.name)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Reply Form */}
        {isReplying && (
          <div className="bg-white p-5 md:p-8 rounded-[20px] shadow-md mb-6">
            <h4 className="font-bold text-lg mb-4">Reply to Message</h4>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
              rows={6}
              placeholder="Type your reply here..."
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsReplying(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleReply}
                className="px-6 py-2 text-white rounded-lg font-medium 
                bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
                hover:opacity-80 transition-all duration-200"
              >
                Send Reply
              </button>
            </div>
          </div>
        )}

        {/* Forward Form */}
        {isForwarding && (
          <div className="bg-white p-5 md:p-8 rounded-[20px] shadow-md mb-6">
            <h4 className="font-bold text-lg mb-4">Forward Message</h4>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To:
              </label>
              <input
                type="text"
                value={forwardTo}
                onChange={(e) => setForwardTo(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter recipient email"
              />
            </div>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
              rows={4}
              placeholder="Add a note (optional)"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsForwarding(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleForward}
                className="px-6 py-2 text-white rounded-lg font-medium 
                bg-gradient-to-r from-[#384295] to-[#14ADD6] shadow-md 
                hover:opacity-80 transition-all duration-200"
              >
                Forward
              </button>
            </div>
          </div>
        )}

        {/* Message Thread */}
        {message.thread?.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Conversation
            </h3>
            {message.thread.map((msg, index) => (
              <div
                key={index}
                className={`bg-white p-5 md:p-6 rounded-[20px] shadow-md ${
                  msg.from === "You" ? "border-l-4 border-blue-500" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium">
                      {msg.from === "You" ? "You" : msg.from}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span>{msg.date}</span>
                      <span>{msg.time}</span>
                    </div>
                  </div>
                </div>
                <div className="whitespace-pre-line text-gray-700 mt-3">
                  {msg.body}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageDetail;
