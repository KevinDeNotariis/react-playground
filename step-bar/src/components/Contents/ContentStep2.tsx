import Button from '../Button';
import ContentContainer from './ContentContainer';
import ContentInputItem from './ContentInputItem';
import ContentButtonItem from './ContentButtonItem';

interface ContentStep2Props {
  prevHandler: Function;
  nextHandler: Function;
  email: string;
  fieldHandler: Function;
}

const ContentStep2 = ({ prevHandler, nextHandler, email, fieldHandler }: ContentStep2Props) => (
  <ContentContainer>
    <ContentInputItem>
      <input
        placeholder="email"
        type="text"
        onChange={(event) => fieldHandler('email', event.target.value)}
        value={email}
      />
    </ContentInputItem>

    <ContentButtonItem>
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
    </ContentButtonItem>
  </ContentContainer>
);

export default ContentStep2;
