/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import AddQuestion from './AddQuestion.jsx';
import List from './List.jsx';
import Search from './Search.jsx';

const url = 'http://3.134.102.30';


class QnA extends React.Component {
  constructor(props, { prodId }) {
    super(props, { prodId });
    this.state = {
      productId: props.prodId,
      filteredQuestions: [],
      questions: [],
      search: '',
      questionDisplayCount: 2,
      productName: "Camo Onesie",
    };
    console.log(this.state)
    this.searchFilter = () => {
      const { questions } = this.state;
      this.setState({ search: document.getElementById('qna-searchbar').value }, () => {
        const { search } = this.state;
        if (search.length >= 3) {
          const filteredQuestions = questions.filter(
            (question) => question.question_body.toLowerCase().includes(search.toLowerCase()),
          );
          this.setState({ filteredQuestions });
        } else {
          this.setState({ filteredQuestions: [] });
        }
      });
    };

    this.helpfulClickHandler = (component, id, type) => {
      if (component === 'reviews') {
        fetch(`${url}/${component}/helpful/${id}`, {
          method: 'PUT',
        });
      } else {
        fetch(`${url}/${component}/${type}/${id}/helpful`, {
          method: 'PUT',
        });
      }
    };

    this.reportClickHandler = (component, id, type) => {
      if (component === 'reviews') {
        fetch(`${url}/${component}/report/${id}`, {
          method: 'PUT',
        });
      } else {
        fetch(`${url}/${component}/${type}/${id}/report`, {
          method: 'PUT',
        });
      }
    };

    this.increaseDisplayCount = () => {
      const { questionDisplayCount } = this.state;
      this.setState({ questionDisplayCount: questionDisplayCount + 2 });
    };
  }

  componentDidMount() {
    const { prodId } = this.props;

    fetch(`${url}/qa/${prodId}`)
      .then((data) => data.json())
      .then((result) => {
        const currentState = this.state;
        currentState.questions = result.results;
        this.setState(currentState);
      });
  }

  componentDidUpdate(prevProps) {
    const { prodId } = this.props;

    if (prodId !== prevProps.prodId) {
      fetch(`${url}/qa/${prodId}`)
        .then((data) => data.json())
        .then((result) => {
          const currentState = this.state;
          currentState.questions = result.results;
          currentState.productName = productData.name;
          currentState.productId = productId;
          this.setState(currentState);
        });
    }
  }

  render() {
    const {
      questions,
      productId,
      filteredQuestions,
      productName,
      questionDisplayCount,
      helpfulClickHandler,
      reportClickHandler,
    } = this.state;

    return (
      <div id="qna-container">
        <h4 style={{ marginTop: '50px' }}>
          QUESTIONS & ANSWERS
        </h4>
        <Search searchFilter={this.searchFilter} />
        <List
          questions={
            filteredQuestions.length === 0
              ? questions.slice(0, questionDisplayCount)
              : filteredQuestions
            }
          productName={productName}
          helpfulClickHandler={helpfulClickHandler}
          reportClickHandler={reportClickHandler}
        />
        { questions.length <= questionDisplayCount
          ? ''
          : (
            <span
              role="presentation"
              id="qna-load-more-questions"
              className="qna-load-more-q"
              onClick={() => {
                this.increaseDisplayCount();
              }}
            >
              <p style={
                  {
                    lineHeight: '26px',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }
                }
              >
                MORE ANSWERED QUESTIONS
              </p>
            </span>
          ) }
        <AddQuestion
          productId={productId}
          productName={productName}
        />
      </div>
    );
  }
}

QnA.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default QnA;
