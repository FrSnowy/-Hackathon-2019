import React from 'react';
import Col from 'react-bootstrap/Col';
import TabButton from '../TabButton/TabButton';;

class HeaderTabs extends React.Component {
  render() {
    const { isAuth } = this.props;
    
    const tabs = [
      { name: "Актуальное", displayForGuest: true, to: '/', },
      { name: "Свежее", displayForGuest: true, to: '/new', },
      { name: "Подписки", displayForGuest: false, to: '/subscribes' }
    ]

    const tabViews = tabs
      .filter((tab, i) => tab.displayForGuest ? true : isAuth)
      .map((tab, i) => <TabButton key = {i} to = { tab.to }content = {tab.name} isSelected = { i === 0 } />);

    return (
      <Col lg={5} md = {isAuth ? 6 : 4} sm = {isAuth ? 8 : 5} xs = {12} className="tabs-wrapper">
        { tabViews }
      </Col>
    );
  }
}

export default HeaderTabs;
