import Button from '../Button';
import ContentContainer from './ContentContainer';

export interface ContentStep3Props {
  prevHandler: Function;
  additionalNotes: string;
  fieldHandler: Function;
}

const ContentStep3 = ({ prevHandler, additionalNotes, fieldHandler }: ContentStep3Props) => (
  <ContentContainer>
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'row' }}>
      <textarea
        placeholder="Additional Notes ..."
        onChange={(event) => fieldHandler('additionalNotes', event.target.value)}
        value={additionalNotes}
        rows={5}
      />
    </div>
    <div style={{ alignSelf: 'flex-start' }}>
      <Button onClick={() => prevHandler()} type="button">
        Previous
      </Button>
    </div>
  </ContentContainer>
);

export default ContentStep3;
