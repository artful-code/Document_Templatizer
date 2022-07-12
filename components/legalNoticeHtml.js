import styles from '../styles/legalnotice.module.css'
import { Col,Row,Form,Button, Container } from 'react-bootstrap'

const LegalNoticeHtml=({date,lawyer,client,recipient,references,statements})=>{
    return(
        <div className={styles.formouter}>
                <div id='legalnoticeform' className={styles.form}>
                    <Container>
                        <Row>
                            <span><center>{lawyer['name']}</center></span>
                            <span><center>ADVOCATE</center></span>
                            <span>Address : {lawyer['address']} , {lawyer['pin']}</span>
                            <span>Telephone : {lawyer['phone']} &emsp; Mobile : {lawyer['mobile']}</span>
                            <hr/>    
                        </Row>
                        <Row>
                            <Col style={{'textAlign':'right'}}>
                                <p>
                                <span >Date : </span>
                                <em>
                                    <span >{date}</span>
                                </em>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <span >To,</span><br/>
                                <strong>Grievance Officer</strong><br/>
                                <hr/>
                                <em>
                                    {recipient['name']}
                                </em><br/>
                                <em>
                                    {recipient['address']}
                                </em><br/>
                                <em>
                                    {recipient['city']}, {recipient['state']}
                                </em><br/>
                                <em>
                                    Pin : {recipient['pin']}
                                </em>
                            </Col>
                        </Row>
                        <Row style={{'textAlign':'right'}}>
                            <Col xs={{span:5,offset:7}}>
                                <p>
                                    <strong>My Client:</strong><br/>
                                    <strong>
                                        <em>Mr.{client['name']} ,</em>
                                    </strong><br/>
                                    <em>
                                        <span >R/o – {client['address']}</span>
                                    </em>    
                                </p>
                                
                            </Col>
                        </Row>
                        <Row style={{'textAlign':'left'}}>
                            <p>
                            <strong>SUB:&nbsp;</strong>
                            <em>
                                <span >Legal</span>
                            </em> 
                            <em>
                                <span >Notice for deficiency in services, defects and mental harassment.</span>
                            </em>
                            </p>
                        </Row>
                        <Row>
                            <strong>
                                <em>Reference:</em>
                            </strong>
                            <span style={{'paddingLeft':'3%'}}>
                                <ol>
                                    {references.length==0? 
                                    <>________________<br/>________________</>:
                                    references.map((ref,id)=>{
                                        return(
                                            <li key={id}>{ref}</li>
                                        );
                                    })}
                                </ol>    
                            </span>           
                        </Row>
                        <Row>
                        <p>
                            <span >Dear Sir/ Ma’am,</span>
                            </p> 
                        </Row>
                        <Row>
                            <p>
                            <span >It is hereby stated that You have provided deficient services, breached the agreed terms and conditions and denied the due refund to my Client accruing from the mental harassment, deficiency of services to my Client along with criminal breach of trust and conspiracy to cheat and defraud my Client. Under the instructions from and on behalf of my Client, and after crucial analysis of all the sequential events of the repeated conversations between You and my Client which were handed to me by my client, we would like to state as follows:</span>
                            </p>
                        </Row>
                        <Row>
                            <span style={{'paddingLeft':'3%'}}>
                                <ol>
                                    <li>That my Client {client['name']}, a resident of {client['address']}</li>
                                    {statements.length==0? 
                                    <>________________<br/>________________</>:
                                    statements.map((statement,id)=>{
                                        return(
                                            <li key={id}>{statement}</li>
                                        );
                                    })}
                                </ol>    
                            </span> 
                        </Row>
                        <Row>
                            <p>
                            <span >Take further notice that in case of your failure to discharge your obligations and commitments within the time specified, my Client shall be further constrained to lodge a consumer complaint against You for deficiency of services and wrongful loss caused to my Client and also institute such other proceedings and actions in law as advised.&nbsp;</span>
                            </p>
                        </Row>
                        <Row style={{'textAlign':'left'}}>
                            <strong>{lawyer['name']}</strong>
                            <span >(Advocate)</span>
                            <span >{lawyer['id']}</span>
                        </Row>
                    </Container>
                </div> 
            </div>
    );
}

export default LegalNoticeHtml;