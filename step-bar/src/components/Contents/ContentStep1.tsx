import Button from '../Button';
import ContentContainer from './ContentContainer';
import ContentInputItem from './ContentInputItem';
import ContentButtonItem from './ContentButtonItem';

export interface ContentStep1Props {
  nextHandler: Function;
  username: string;
  password: string;
  fieldHandler: Function;
}

const ContentStep1 = ({ nextHandler, username, password, fieldHandler }: ContentStep1Props) => (
  <ContentContainer>
    <ContentInputItem>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          placeholder="username"
          type="text"
          onChange={(event) => fieldHandler('username', event.target.value)}
          value={username}
        />
        <br />
        <input
          placeholder="password"
          type="password"
          onChange={(event) => fieldHandler('password', event.target.value)}
          value={password}
        />
      </div>
    </ContentInputItem>

    <ContentButtonItem alignSelf="flex-end">
      <div>
        <Button onClick={() => nextHandler()} type="button">
          Next
        </Button>
      </div>
    </ContentButtonItem>
  </ContentContainer>
);

export default ContentStep1;
