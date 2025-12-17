* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgba(206, 205, 205, 0.438);
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.header-container {
  background: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 10px 12px;
  border-radius: 20px;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.3);
}
.header-container a {
  text-decoration: none;
}
.header-container h2 {
  color: #014d36;
  font-weight: bold;
  transition: 0.3s ease;
}
.header-container h2:hover{
  color: #00815a;
  transform: scale(1.05);
}
.menu-btn {
    color: white;
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 30px;
    cursor: pointer;
    z-index: 999;
    background: #026849;
    padding: 5px 12px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.side-menu {
    position: fixed;
    top: 0;
    left: -280px;
    width: 260px;
    height: 100%;
    background: #026849;
    padding-top: 60px;
    transition: 0.3s ease;
    z-index: 10000;
}
.side-menu.open {
    left: 0;
}
.side-menu a {
    display: block;
    padding: 15px 25px;
    color: white;
    text-decoration: none;
    font-size: 18px;
}
.side-menu a:hover {
    background: #013a29;
}
.side-menu h2 {
    font-size: 1.7rem;
    color: white;
    display: flex;
    position: absolute;
    float: left;
    top: 12px;
    left: 10px;
}
#closeBtn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: white;
    font-size: 22px;
    cursor: pointer;
}
#closeBtn:hover {
    color: grey;
    transform: scale(1.1);
}
#overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 999;
}
#overlay.show {
    display: block;
}

#calculator {
  font-family: Arial, Helvetica, sans-serif;
  background-color: hsl(0, 0%, 30%);
  border-radius: 15px;
  width: 95vw;
  max-width: 380px;
  margin: 20px auto;
  overflow: hidden;
}
#display {
  width: 100%;
  padding: 15px;
  font-size: clamp(2.5rem, 8vw, 4rem);
  text-align: right;
  border: none;
  background-color: hsl(0, 0%, 46%);
  color: white;
}

#keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 15px;
}

#calBtn {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: none;
  background: hsl(0, 0%, 30%);
  color: black;
  font-size: clamp(1.8rem, 6vw, 2.5rem);
  font-weight: bold;
  cursor: pointer;
  touch-action: manipulation;
}

#calBtn:hover {
    background-color: hsl(0, 0%, 40%);
}
#calBtn:active {
    background-color: hsl(0, 0, 50%);
    transform: scale(0.95);
}
.operator-btn {
    background-color: hsl(35, 100%, 55%);
} 
.operator-btn:hover {
    background-color: hsl(35, 100%, 45%);
}
.operator-btn:active {
    background-color: hsl(35, 100%, 65%);
}
@media (max-width: 480px) {
  .menu-btn {
    top: 12px;
    left: 12px;
    font-size: 24px;
  }

  .header-container {
    font-size: 28px;
    padding: 10px;
  }
}
