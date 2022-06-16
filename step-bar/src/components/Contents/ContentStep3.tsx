import Button from '../Button';
import SubmitButton from '../SubmitButton';
import ContentContainer from './ContentContainer';
import ContentInputItem from './ContentInputItem';
import ContentButtonItem from './ContentButtonItem';

export interface ContentStep3Props {
  prevHandler: Function;
  additionalNotes: string;
  fieldHandler: Function;
  submitHandler: Function;
  submitButtonEnabled: boolean;
}

const ContentStep3 = ({
  prevHandler,
  additionalNotes,
  fieldHandler,
  submitHandler,
  submitButtonEnabled,
}: ContentStep3Props) => (
  <ContentContainer>
    <ContentInputItem>
      <textarea
        placeholder="Additional Notes ..."
        onChange={(event) => fieldHandler('additionalNotes', event.target.value)}
        value={additionalNotes}
        rows={5}
      />
    </ContentInputItem>

    <ContentButtonItem>
      <div>
        <Button onClick={() => prevHandler()} type="button">
          Previous
        </Button>
      </div>
      <div>
        <SubmitButton onClick={() => submitHandler()} type="button" disabled={!submitButtonEnabled}>
          Submit
        </SubmitButton>
      </div>
    </ContentButtonItem>
  </ContentContainer>
);

export default ContentStep3;
