import "./sidebar.scss";
import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const classname = "sidebar";

const activePage = "sales";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened } = this.state;
    const containerClassnames = classnames(classname, { opened: isOpened });
    const routeClassnames = (route) =>
      classnames(classname + "__route", {
        active: route.path.slice(1) === activePage,
      });
    const titlesClassnames = classnames(classname + "__route_title", {
      opened: isOpened,
    });

    return (
      <div className={containerClassnames}>
        <div className={classname + "__header"}>
          <div className={classname + "__header_image"}>
            <img src={logo} alt="TensorFlow logo" />
          </div>
          <span className={titlesClassnames}>TensorFlow</span>
          <button onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
          </button>
        </div>

        <div className={classname + "__routes"}>
          {routes.map((route) => (
            <div
              className={routeClassnames(route)}
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span className={titlesClassnames}>{route.title}</span>
            </div>
          ))}
        </div>

        <div className={classname + "__routesBottom"}>
          {bottomRoutes.map((route) => (
            <div
              className={routeClassnames(route)}
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span className={titlesClassnames}>{route.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
