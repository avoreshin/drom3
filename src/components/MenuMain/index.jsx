import React, { Component } from "react";
import { Button, Icon, Menu, MenuItem } from "semantic-ui-react";
import "./MenuMain.css";
import Logo from "../../images/photo1652437993.jpeg";
import { Link } from "react-router-dom";

export default class MenuMain extends Component {
  state = { activeItem: "Автомобили" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  activateItem;

  render() {
    const { activeItem } = this.state;
    return (
      <div className="Header__menu">
        <Menu stackable secondary inverted color={"black"}>
          <MenuItem className="LogoMain">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/about"}>
              <Icon name={"map marker alternate"} color={"red"}>
                {" "}
              </Icon>{" "}
              Ваш город
            </Link>
          </MenuItem>

          <Link to={"/"}>
            <MenuItem
              name="Авто"
              active={activeItem === "Авто"}
              onClick={this.handleItemClick}
            />
          </Link>

          <MenuItem
            name="Спецтехника"
            active={activeItem === "Спецтехника"}
            onClick={this.handleItemClick}
          />

          <MenuItem
            name="Мото"
            active={activeItem === "Мото"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="Шины"
            active={activeItem === "Шины"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="Запчасти"
            active={activeItem === "Запчасти"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="Аренда авто"
            active={activeItem === "Аренда авто"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="Еще"
            active={activeItem === "Еще"}
            onClick={this.handleItemClick}
          />
          <MenuItem>
            <Link to={"/entry"}>Вход и регистрация</Link>
          </MenuItem>
        </Menu>
        <Link to={"/new_ann"}>
          <Button color={"red"}>
            <Icon name={"plus circle"}></Icon>
            Подать объявление
          </Button>
        </Link>
      </div>
    );
  }
}
