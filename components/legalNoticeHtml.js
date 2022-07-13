import styles from '../styles/legalnotice.module.css'
import { useRef } from 'react';
import { Col,Row,Form,Button, Container } from 'react-bootstrap'

const LegalNoticeHtml=({date,lawyer,client,recipient,references,statements})=>{
    
    const myRef=useRef(null)
    return(
        <div className={styles.formouter}>
            <div id='legalnoticeform' className={styles.form}>
                <Container>
                    <Row className='lnformrows' id='lnlawyer'>
                        <center>{lawyer['name']}</center>
                        <center>ADVOCATE</center>
                        &emsp;Address : {lawyer['address']} , {lawyer['pin']}<br/>
                        &emsp;Telephone : {lawyer['phone']} &emsp; Mobile : {lawyer['mobile']}
                        <hr/>    
                    </Row>
                    <Row className='lnformrows' id='lndate'>
                        <Col style={{'textAlign':'right'}}>
                            <p>
                            <span >Date : </span>
                            <em>
                                <span >{date}</span>
                            </em>
                            </p>
                        </Col>
                    </Row>
                    <Row className='lnformrows' id='lnrecipient'>
                        <Col xs={5}>
                            <span >To,</span><br/>
                            <strong>Grievance Officer</strong><br/>
                            <hr/>
                            <em>
                                {recipient['name']}
                            </em><br/>
                            <em>
                                {recipient['address1']}
                            </em><br/>
                            <em>
                                {recipient['address2']}
                            </em><br/>
                            <em>
                                {recipient['city']}, {recipient['state']}
                            </em><br/>
                            <em>
                                Pin : {recipient['pin']}
                            </em>
                        </Col>
                    </Row>
                    <Row className={`lnformrows ${styles.alignright}`} id='lnclient'>
                            <strong>My Client:</strong><br/>
                            <strong>
                                <em>Mr.{client['name']} ,</em>
                            </strong><br/>

                            <em>
                                R/o – {client['address1']}
                            </em><br/>
                            <em>
                                {client['address2']}
                            </em> <br/>
                            <em>
                                {client['city']}, {client['state']}
                            </em><br/>
                            <em>
                                Pin : {client['pin']}
                            </em>

                    </Row>
                    <br/>
                    <Row style={{'textAlign':'left'}}>
                        <p>
                        <strong>SUB : </strong>
                        <em>
                            <span >Legal</span>
                        </em> 
                        <em>
                            <span >Notice for deficiency in services, defects and mental harassment.</span>
                        </em>
                        </p>
                    </Row>
                    <Row className='lnformrows' id='lnreferences'>
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
                    <Row className='lnformrows' id='lnstatements'>
                        <span style={{'paddingLeft':'3%'}}>
                            <ol>
                                <li>That my Client {client['name']}, a resident of {client['address1']} {client['address2']} {client['city']} {client['state']} , {client['pin']}</li>
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
                        <span >Take further notice that in case of your failure to discharge your obligations and commitments within the time specified, my Client shall be further constrained to lodge a consumer complaint against You for deficiency of services and wrongful loss caused to my Client and also institute such other proceedings and actions in law as advised . </span>
                        </p>
                    </Row>
                    <Row style={{'textAlign':'left'}}>
                        <strong>{lawyer['name']}</strong><br/>
                        (Advocate)<br/>
                        {lawyer['id']}
                    </Row>
                </Container>
            </div> 
        </div>
    );
}

export default LegalNoticeHtml;