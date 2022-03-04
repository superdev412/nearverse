import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import '../../assets/css/blog/FAQ.css';
import Harrow from '../../assets/img/horizontal-arrow.png'
import Varrow from '../../assets/img/vertical-arrow.png'


class FAQ extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
          flag : [true,false,false,false,false,false,false,false],
          notify:true
        }
      }
    
      componentDidMount() {
        $('#content1').slideDown();
    
        // var temp = this.state.flag;
    
        // var len = $("#drop-part").children().length;
        // $("#drop-part").children("div").children("div").children("img").click(function(){
        //   var selected_id = this.id;
        //   var order = selected_id.slice(-1);
        //   $("#content" + order).slideToggle();
        //   temp[order] = !temp[order]
        //   console.log(temp)
        //   for(var i = 0; i <= len ; i ++){
        //     if(i == order){
        //       continue;
        //     }
        //     $("#content" + i).slideUp();
        //   }
        // })
        
        // this.setState({flag:temp})
        // console.log(this.state.flag)
        // this.setState({notify:!this.state.notify})
      }
    
      click(e){
        var temp = this.state.flag;
    
        var len = $("#drop-part").children().length;
        var selected_id = e.currentTarget.id;
        var order = selected_id.slice(-1);
          for(var i = 0; i <= len ; i ++){
            if(i == order-1){
              $("#content" + order).slideToggle();
              temp[order-1] = !temp[order-1]
            }else{
              $("#content" + (i+1)).slideUp();
              temp[i] = false;
            }        
          }
          this.setState({flag:temp})
          this.setState({notify:!this.state.notify})
      }

    render(){
        return(
            <div className='team-content'>
                <p className='team-title'>FAQs</p>
                <div id="drop-part" className="drop-part">
                    <div id="part1" className="each-part-faq">
                        <div id="div1" onClick={(e) => this.click(e)} style={{cursor:'pointer'}}>
                            <p className="md-description-faq">Lorem ipsum dolor sit amet, consectetur?</p>
                            {this.state.flag[0] ? <img id="button1" className="vertical-img" src={Varrow} /> : <img id="button1" className="horizontal-img" src={Harrow} />}
                        </div>
                        <br/>
                        <br/>
                        <div id="content1" style={{marginTop:'20px',display:'none'}}>
                            <p className="sm-description-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <br/>
                    </div>

                    <div id="part2" className="each-part-faq">
                        <div id="div2" onClick={(e) => this.click(e)} style={{cursor:'pointer'}}>
                            <p className="md-description-faq">Lorem ipsum dolor sit amet, consectetur?</p>
                            {this.state.flag[1] ? <img id="button2" className="vertical-img" src={Varrow} /> : <img id="button2" className="horizontal-img" src={Harrow} />}
                        </div>
                        <br/><br/>
                        <div id="content2" style={{marginTop:'20px',display:'none'}}>
                            <p className="sm-description-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
                        </div>
                        <br/>
                    </div>

                    <div id="part3" className="each-part-faq">
                        <div id="div3" onClick={(e) => this.click(e)} style={{cursor:'pointer'}}>
                            <p className="md-description-faq">Lorem ipsum dolor sit amet, consectetur?</p>
                            {this.state.flag[2] ? <img id="button3" className="vertical-img" src={Varrow} /> : <img id="button3" className="horizontal-img" src={Harrow} />}
                        </div>
                        <br/><br/>
                        <div id="content3" style={{marginTop:'20px',display:'none'}}>
                            <p className="sm-description-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
                        </div>
                        <br/>
                    </div>

                    <div id="part4" className="each-part-faq">
                        <div id="div4" onClick={(e) => this.click(e)} style={{cursor:'pointer'}}>
                            <p className="md-description-faq">Lorem ipsum dolor sit amet, consectetur?</p>
                            {this.state.flag[3] ? <img id="button4" className="vertical-img" src={Varrow}/> : <img id="button4" className="horizontal-img" src={Harrow} />}
                        </div>
                        <br/><br/>
                        <div id="content4" style={{marginTop:'20px',display:'none'}}>
                            <p className="sm-description-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
                        </div>
                        <br/>
                    </div>

                    <div id="part5" className="each-part-faq">
                        <div id="div5" onClick={(e) => this.click(e)} style={{cursor:'pointer'}}>
                            <p className="md-description-faq">Lorem ipsum dolor sit amet, consectetur?</p>
                            {this.state.flag[4] ? <img id="button5" className="vertical-img" src={Varrow}/> : <img id="button5" className="horizontal-img" src={Harrow} />}
                        </div>
                        <br/><br/>
                        <div id="content5" style={{marginTop:'20px',display:'none'}}>
                            <p className="sm-description-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
                        </div>
                        <br/>
                    </div>

                </div>
            </div>
        )
    }
}

export default FAQ;