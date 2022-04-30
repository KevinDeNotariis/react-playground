import Button from '../Button';
import ContentContainer from './ContentContainer';

interface ContentStep2Props {
  prevHandler: Function;
  nextHandler: Function;
  email: string;
  fieldHandler: Function;
}

const ContentStep2 = ({ prevHandler, nextHandler, email, fieldHandler }: ContentStep2Props) => (
  <ContentContainer>
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'row' }}>
      <input
        placeholder="email"
        type="text"
        onChange={(event) => fieldHandler('email', event.target.value)}
        value={email}
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div>
        <Button onClick={() => prevHandler()} type="button">
          Previous
        </Button>
      </div>
      <div>
        <Button onClick={() => nextHandler()} type="button">
          Next
        </Button>
      </div>
    </div>
  </ContentContainer>
);

export default ContentStep2;
