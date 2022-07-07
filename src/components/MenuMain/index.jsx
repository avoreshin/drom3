import React, {Component} from "react";
import {Button, Dropdown, Icon, Menu, MenuItem} from "semantic-ui-react";
import "./MenuMain.css";
import Logo from "../../images/photo1652437993.jpeg";
import {Link} from "react-router-dom";
import LoginGoogle from "../LoginGoogle";

export default class MenuMain extends Component {
    state = {activeItem: "Автомобили"};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    activateItem;

    render() {
        const {activeItem} = this.state;
        return (<div className="Header__menu">
            <Menu
                className = "Menu_wrapper"
                fluid
                stackable secondary inverted color={"black"}
            >
                <MenuItem className="LogoMain">
                    <Link to={"/"}>
                        <img src={Logo} alt="logo"/>
                    </Link>
                </MenuItem>
                <MenuItem>

                        <Icon name={"map marker alternate"} color={"red"}>
                            {" "}
                        </Icon>{" "}
                    <Dropdown
                    placeholder={"Ваш город"}
                    options={""}
                    />

                </MenuItem>

                <Link to={"/"}>
                    <MenuItem
                        name="Автомобили"
                        active={activeItem === "Автомобили"}
                        onClick={this.handleItemClick}
                    />
                </Link>

                {/*<MenuItem*/}
                {/*    name="Спецтехника"*/}
                {/*    active={activeItem === "Спецтехника"}*/}
                {/*    onClick={this.handleItemClick}*/}
                {/*/>*/}

                {/*<MenuItem*/}
                {/*    name="Мото"*/}
                {/*    active={activeItem === "Мото"}*/}
                {/*    onClick={this.handleItemClick}*/}
                {/*/>*/}
                {/*<MenuItem*/}
                {/*    name="Шины"*/}
                {/*    active={activeItem === "Шины"}*/}
                {/*    onClick={this.handleItemClick}*/}
                {/*/>*/}
                {/*<MenuItem*/}
                {/*    name="Запчасти"*/}
                {/*    active={activeItem === "Запчасти"}*/}
                {/*    onClick={this.handleItemClick}*/}
                {/*/>*/}
                {/*<MenuItem*/}
                {/*    name="Аренда авто"*/}
                {/*    active={activeItem === "Аренда авто"}*/}
                {/*    onClick={this.handleItemClick}*/}
                {/*/>*/}
                {/*<MenuItem*/}
                {/*    name="Еще"*/}
                {/*    active={activeItem === "Еще"}*/}
                {/*    onClick={this.handleItemClick}*/}
                {/*/>*/}



                <Link to={"/new_ann"}>
                    <Button color={"red"}>
                        <Icon name={"plus circle"}/>
                        Подать объявление
                    </Button>
                </Link>

                <MenuItem>
                    <LoginGoogle/>
                    {/*<Link to={"/entry"}>Вход и регистрация</Link>*/}
                </MenuItem>


            </Menu>
        </div>);
    }
}
