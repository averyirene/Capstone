import './About.scss';

const About = () => {
    return (
        <>
            <div className="login__form">
                <h1 className="about__title">About</h1>
            </div>

            <div className='about__page'>
                <h4>What is hypochondria?</h4>
                <p className='about__text'>Hypochondria is a type of
                anxiety disorder where people experience serious anxiety about their health. The anxiety can be
                so severe, that they believe they are seriously ill. Sometimes it can prevent people from 
                doing daily tasks.
                This can affect people who are completely healthy as well as people who may have other
                health conditions. </p>
            </div>

            <div className='about__page'>
                <h4>What causes hypochondria?</h4>
                <p className='about__text'>There is no direct cause of what causes hypochondria, but there
                are a number of factors that could make somebody more likely to develop it.</p>
                        <li>A family history of anxiety disorders</li>
                        <li>A history of serious illness</li>
                        <li>Anxiety, depression, OCD and other mental illnesses</li>
            
            </div>

            <div className='about__page--bottom'>
                <h4>What can help?</h4>
                <p className='about__text'>Stress management and relaxation techniques such as mindful breathing 
                patterns and the reassurance 'symptom checker' provided on Reassure can help ease health anxiety. 
                Meditation, journalling, therapy, and good sleep practices can also reduce this anxiety.
                </p>
                
            </div>
            
            <div className='about__disclaimer'>
                <span> If you think you may have hypochondria, talk to a health professional.</span>
            </div>
        </>
    )
}

export default About;