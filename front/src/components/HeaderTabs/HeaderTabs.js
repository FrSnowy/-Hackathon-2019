import React from 'react';
import Col from 'react-bootstrap/Col';
import TabButton from '../TabButton/TabButton';;

class HeaderTabs extends React.Component {
  render() {
    const { isAuth } = this.props;
    
    const tabs = [
      { name: "Актуальное", displayForGuest: true },
      { name: "Свежее", displayForGuest: true },
      { name: "Подписки", displayForGuest: false }
    ]

    const tabViews = tabs
      .filter((tab, i) => tab.displayForGuest ? true : isAuth)
      .map((tab, i) => <TabButton key = {i} content = {tab.name} isSelected = { i === 0 } />);

    return (
      <Col lg={5} md = {isAuth ? 6 : 4} sm = {isAuth ? 8 : 5} xs = {12} className="tabs-wrapper">
        { tabViews }
      </Col>
    );
  }
}

export default HeaderTabs;
