import Button from '../Button';
import ContentContainer from './ContentContainer';

export interface ContentStep1Props {
  nextHandler: Function;
  username: string;
  password: string;
  fieldHandler: Function;
}

const ContentStep1 = ({ nextHandler, username, password, fieldHandler }: ContentStep1Props) => (
  <ContentContainer>
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'row' }}>
      <input
        placeholder="username"
        type="text"
        onChange={(event) => fieldHandler('username', event.target.value)}
        value={username}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(event) => fieldHandler('password', event.target.value)}
        value={password}
      />
    </div>
    <div style={{ alignSelf: 'flex-end' }}>
      <Button onClick={() => nextHandler()} type="button">
        Next
      </Button>
    </div>
  </ContentContainer>
);

export default ContentStep1;
