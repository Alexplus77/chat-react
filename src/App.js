import "css/main.css";

import HistoryPage from "pages/HistoryPage";

function App() {
  const messages = [];
  return (
    messages.length > 0 && (
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <HistoryPage list={messages} />
          </div>
        </div>
      </div>
    )
  );
}

export default App;
