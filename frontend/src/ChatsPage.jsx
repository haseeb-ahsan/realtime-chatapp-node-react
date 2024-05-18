import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'c0ce0784-df2b-4fd6-8342-f4477adea08b',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: '100vh' }}>
      {/* // declare chat socket and pass chatProps which allows us to connect to */}
      {/* // chat engine websockets */}

      <MultiChatSocket {...chatProps} />

      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

export default ChatsPage;
