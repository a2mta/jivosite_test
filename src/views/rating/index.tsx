import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { ratingSelectors } from "store/root/rating/selectors";
import { IRating } from "store/root/rating/reducer";
import Card from 'antd/lib/card';

interface IProps {
    ratingList: IRating[];
}


class RatingClass extends React.PureComponent<IProps, {}> {
    public render(): JSX.Element {
        return (
            <Row>
                <Col span={24}>
                    {this.props.ratingList.map((item: IRating) =>
                        <Card className="card_link" key={item.userName} hoverable={true} title={item.userName} >
                            <p>Рейтинг: {item.rating}</p>
                        </Card>
                    )}
                </Col>
            </Row>
        );
    }
}


const Rating = compose(
    withRouter,
    connect(state => ({
        ratingList: ratingSelectors.getRatingList(state),
    })),
)(RatingClass as any);

export default Rating;