import { useState } from "react";
import Card from "react-bootstrap/esm/Card";
import Nav from "react-bootstrap/esm/Nav";
import Affordability from '../../assets/Affordability.svg';
import AppleStore from '../../assets/AppleStore.svg';
import PlayStore from '../../assets/googlePlay.svg';
import GrpOfPhone from '../../assets/grpOfPhone.svg';
import QualityAssurance from '../../assets/QualityAssurance.svg';
import Transparency from '../../assets/Transparency.svg';
import AccordinAlwaysOpen from "../Atoms/Accordin/Accordin";
import ContentCard from "../Atoms/Cards/ContentCard";
import LotteryContentCard from "../Atoms/Cards/LotteryContentCard";
import MhadaCard from "../Atoms/Cards/MhadaCard";
import { StatsCard1, StatsCard2, StatsCard3 } from "../Atoms/Cards/StatCard";
import StepCard from "../Atoms/Cards/StepCard";
import VideoCard from "../Atoms/Cards/VideoCard";
import { CarouselComp } from "../Atoms/Carousel/CarouselComp";
import MhadaLogo from "../shared/MhadaLogo";
import { accordinLists, cardDetails, contentArr, lotteryCardsData, realTimeList, stepList } from "../shared/sharedpageData";


const Home = () => {

    const [selectedTab, setSelectedTab] = useState<string>("link-1");
    
    return (
        <div className="px-4">
        <div className="row">
          <div className="col-lg-10 col-md-9 col-sm-12 mt-4">
            <CarouselComp/>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 mt-4">
          <StatsCard1/>
          <StatsCard2/>
          </div>
          </div>
            <Card style={{ borderColor: "#FFFFFF" }} className="cm-mt ">
                <h1 className="col col-sm col-md-9 col-xl-5 col-xxl-8">Building a better future with <MhadaLogo /></h1>
                <p className="col col-sm col-md-9 col-xl-5 col-xxl-8">
                    The <strong>Maharashtra Housing and Area Development Authority (MHADA)</strong> has been a cornerstone of affordable housing in Maharashtra since its inception in 1977. Dedicated to providing quality homes to middle and lower-income groups.
                </p>
                <div className="row content-card px-2  gap-4">
                    {contentArr.map(({ title, icon, content }: any) => (<ContentCard
                        title={title}
                        icon={icon}
                        col={"col col-sm  col-md-4 col-lg col-xl-3 col-xxl-3"}    
                        content={content}
                    />))}
                    {/* <div className="col-4"> */}
                        <VideoCard/>
                    {/* </div> */}

                </div>

            </Card>
            <Card style={{ borderColor: "#FFFFFF" }} className="lottery-card cm-mt">
                <div className="col-sm col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                    <MhadaLogo /><span className="title-span">lottery board projects</span>
                </div>
                <div className="tab-outer mt-2">
                    <Nav variant="pills" defaultActiveKey={selectedTab}>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => setSelectedTab("link-1")}>Chatrapati Sambhajinagar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={() => setSelectedTab("link-2")}>Pune</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" onClick={() => setSelectedTab("link-3")}>Nashik</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4" onClick={() => setSelectedTab("link-4")}>Nagpur</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5" onClick={() => setSelectedTab("link-5")}>MHADA CDP</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="row p-4 gap-3">
                    {lotteryCardsData[selectedTab].map((card: any, index: any) => (
                        <LotteryContentCard
                            key={index}
                            // imageSrc={card.imageSrc}
                            title={card.title}
                            applicationDate={card.applicationDate}
                            paymentDate={card.paymentDate}
                        />
                    ))}
                </div>
            </Card>
            <Card style={{ borderColor: "#FFFFFF" }} className="about-card cm-mt">
                <div className="title-span col-sm-4 col-md-4 col-lg-4 ">
                    About <MhadaLogo />
                    lottery scheme
                </div>
                <div className="mt-2">
                    <p className="col-sm-4 col-md-8 col-lg-8">
                        The MHADA lottery aims to provide housing opportunities to middle and lower-income groups in Maharashtra. It allows individuals to apply for a chance to purchase or rent affordable homes developed by MHADA.
                    </p>
                </div>
                <div className="row">
                <Card className="col-sm-1 col-md-9 col-lg-9">
                    <div className="cardDetails">
                        <div>
                            <img src={Affordability} alt="" />
                            <h4 className="mt-2">Affordability</h4>
                            <p>
                                MHADA lottery offers homes below market rates, ensuring access for middle and lower-income families.
                            </p>
                        </div>
                        <div>
                            <img src={Transparency} alt="" />
                            <h4 className="mt-2">Transparency</h4>
                            <p>
                                The lottery system ensures a fair and transparent allocation process, eliminating bias and favoritism.
                            </p>
                        </div>
                        <div>
                            <img src={QualityAssurance} alt="" />
                            <h4 className="mt-2">Quality Assurance</h4>
                            <p>
                                MHADA ensures that homes meet high-quality standards of construction and amenities.
                            </p>
                        </div>
                    </div>
                </Card>
                <div className="col-3">
                  <StatsCard3/>  
                </div>
                </div>
            </Card>
            <Card style={{ borderColor: "#FFFFFF", backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "1.5rem" }} className="easy-card cm-mt">
                <h3 className="col-md-3">
                    3 Easy steps to apply for <MhadaLogo />
                    lottery
                </h3>
                <div className="row">
                    {stepList.map(({ stepNo, stepHeading, list, image, altName }: any) => (<StepCard
                        stepNo={stepNo}
                        stepHeading={stepHeading}
                        list={list}
                        image={image}
                        altName={altName}
                        col={"col-sm-12 col-md-3 col-xl-3 col-xxl-3"}
                    />))}
                </div>
            </Card>
            <Card style={{ borderColor: "#FFFFFF" }} className="frequently-asked-card cm-mt">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7">
                        <AccordinAlwaysOpen list={accordinLists} />
                    </div>
                </div>
            </Card>
            <Card style={{ borderColor: "#FFFFFF", backgroundColor: "#FCEBDF", borderRadius: "10px", padding: "1.5rem" }} className="real-time-card cm-mt">
                <div className="row">
                    <div className="col-sm-12 col-md-7">
                        <Card.Body>
                            <Card.Title className="real-header col-md-7">Get real time updates with the <MhadaLogo /> app​</Card.Title>
                            <Card.Text>
                                <ul className="real-time-step-list mt-4">
                                    {realTimeList.reverse().map((e: string) => (<li key={e}>{e}</li>))}
                                </ul>
                            </Card.Text>
                            <div className="row mt-2 mobile-img-cont">
                                <img className="col-sm-2 col-md-3 mobile-img-view" src={PlayStore} alt="PlayStore" />
                                <img className="col-sm-2 col-md-3 mobile-img-view" src={AppleStore} alt="AppleStore" />
                            </div>
                        </Card.Body>

                    </div>
                    <div className="grp-parent col-sm-12 col-md-5">
                        <img className="grp-img img-fluid" src={GrpOfPhone} alt="RealTime" />
                    </div>
                </div>

            </Card>
            <div style={{ borderColor: "#FFFFFF" }} className="about-card cm-mt p-4">
                <h1>News Feed</h1>
                <div className="row gap-4">
                {cardDetails.map(({image, title, text, hashtag})=>(<MhadaCard 
                image={image} 
                title={title}
                 text={text}
                 hashtag={hashtag}
                />))}
                </div>
            </div>
        </div>
    )
}

export default Home