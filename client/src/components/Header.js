import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../actions/userAction";

const Header = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Container>
            <Content>
                <Logo>
                <Link to ="/" style = {{ textDecoration: 'none' }}>
                    <button>
                        <span style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Predict My Sales</span>
                    </button>
                </Link>
                </Logo>
                <Nav>
                    <NavListWrap>
                        <NavList >
                            <button>
                                <img src="/images/notification.svg" alt=""/>
                            </button>
                        </NavList>
                        <NavList>
                            <button>
                                <img src="/images/profile.svg" alt="" />
                            </button>
                        </NavList>
                        <NavList>
                          <i className="fa-solid fa-right-from-bracket"
                            onClick={logoutHandler}
                            style={{ cursor:'pointer', marginLeft: '20px' }}></i>
                        </NavList>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f0f0f0;
    left: 0;
    padding: 10px 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
    justify-content: space between;
     button {
        border: none;
        background: transparent;
        span {
            font-weight: 700;
            font-size: 200%;
            color: #0a66c2;
            margin-left: -110px;

            @media(max-width: 768px){
                margin-left: -20px;
            }
        }
        cursor: pointer;
    }
`;

const Nav = styled.div`
    margin-left: auto;
    display: block;

    @media(max-width: 768px) {
        position: fixed;
        top: 0;
        margin-top: 6px;
        margin-left: 200px;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: auto;

    @media(max-width: 768px) {
        position: relative;
        display: flex;
        justify-content: center;
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    button {
        align-items: center;
        background: transparent;
        border: none;
        flex-direction: column;
        cursor: pointer;
        
        img {
            width: 20px;
            height: 20px;
            color: #0a66c2;
            background-color: white;
            border-radius: 50%;
            padding: 10px;
        }
    }
`;


export default Header;