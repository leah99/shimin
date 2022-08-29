import React from 'react';

import {Tab, Content} from '../../components'
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects">
            <Tab menu={["Internship", "Final Year Project", "Designer"]} activeIndex={0}>
                <Content
                    header="Front-End Developer "
                    link="https://www.newwealth.com.sg/"
                    linkTitle="@New Wealth"
                    paragraph={["Developed high quality financial software solutions following React.js workflow and best practices"]}
                    list={[{id: 1, title: "Projects developed:", list: ["Smart Advice", "Markaz Catalogue", "IMAS-SG"]}, {id: 2, title: "Projects maintained:", list: ["ESG-Profiler", "NW Mutual Funds Center"]}]}
                />
                <Content
                    header="Artificial Intelligence for Human-Computer Interaction "
                    link="https://www.youtube.com/watch?v=aIDAQbuQy_w"
                    linkTitle="@Final Year Project"
                    paragraph={["My final year project aimed to improve the existing implementation of human-computer dialogue systems and explore the usage of emojis in them to further enhance human-computer interaction.",
                                "In addition to the popular Generative Pre-trained Transformer 3 (GPT-3) model, the approach taken in my study further fine-tuned that model to obtain more desirable responses. It was followed by the generation of emojis in a dialogue system’s response to amplify a more human-like response.Lastly, it was combined to create a dialogue system capable of performing dialogues that mimics a human. Overall, the study has shown promising results to enhance human-computer interaction."]}
                />
                <Content
                    header="Designer "
                    link="https://www.tridentdigital.sg/"
                    linkTitle="@Trident Digital SG"
                    paragraph={["Designed original ideas for clients’ social media platform."]}
                    list={[{id: 1, title: "Tools worked with:", list: ["Adobe Illustrator", "Canva"]}]}
                />
            </Tab>
        </div>
    )
}

export default Projects