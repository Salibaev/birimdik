import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const onClick = (e) => {
  console.log('click', e);
};

const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
);

export default App;

<div class="container">
	<div class="row">
		<div class="col-md-2 "></div>
		    <div class="col-md-8 ">
			    <div class="container fixed-top">
				    <div class="row">
				        <div class="col-md-2"></div>
				        <div class="col-md-8 a6">
				            <div class="row">
				                <div class="col-md-3">
					                <label class="a2a">Instagram</label>
				                </div>
				                <div class="col-md-9 a1a">
					                <i onclick="chat1();" class="far fa-comment-dots a1a"></i>
				                </div>
				                <div class="col-md-12">
				                    <div class="nav-scroller py-1">
                                        <nav class="nav d-flex justify-content-between">

				                            <div class="col-md-3 ">
					                            <img src="img/devushka-fotoapparat-snimaet-3196.jpg" class="a3a" width="70px" height="70px"/><br/>
					                            <label class="a4">Ваша исто...</label>
				                            </div>

				                            <div class="col-md-3 ">
					                            <img src="img/devushka-fotoapparat-snimaet-3196.jpg" class="a3a" width="70px" height="70px"/>
					                            <br/>
					                            <label class="a4">Ismailov.sa</label>
				                            </div>

				                            <div class="col-md-3 ">
					                            <img src="img/devushka-fotoapparat-snimaet-3196.jpg" class="a3a" width="70px" height="70px"/>
					                            <br/>
					                            <label class="a4">Ismailov.sa</label>
				                            </div>

				                            <div class="col-md-3 ">
					                            <img src="img/devushka-fotoapparat-snimaet-3196.jpg" class="a3a" width="70px" height="70px"/>
					                            <br/>
					                            <label class="a4">Ismailov.sa</label>
				                            </div>

			                                <div class="col-md-3 ">
					                            <img src="img/devushka-fotoapparat-snimaet-3196.jpg" class="a3a" width="70px" height="70px"/>
					                            <br/>
					                            <label class="a4">Ismailov.sa</label>
				                            </div>

				                            <div class="col-md-3 ">
					                            <img src="img/devushka-fotoapparat-snimaet-3196.jpg" class="a3a" width="70px" height="70px"/>
					                            <br/>
					                            <label class="a4">Ismailov.sa</label>
				                            </div>

                                        </nav>
                                    </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        </div>
    </div>