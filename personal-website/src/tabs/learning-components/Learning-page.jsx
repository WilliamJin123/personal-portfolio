import {motion} from 'motion/react'


export default function Learning() {
    return(
        <div className="text-white w-[80%] h-auto px-[3vw] mt-[5%] relative flex flex-col justify-center text-start gap-8 pb-[10vh]">
            <header className=' font-medium text-4xl underline ' >My Learning Journey</header>
            <div className='font-light'>This section is an exploration about how I learn best. It is a documentation of strategies I find effective for improving retention, understanding, and application of new concepts/skills. I will be updating and revising as I learn more. </div>

            <header className='text-3xl'>Learning Paradigms</header>
            <div className='font-light'>One thing I noticed about my own learning is that coursework in the form of written tests, with heavily patternized problems and extremely clear curricula came extremely easily to me. For the entirety of high school and the first term of university, I essentially did every exam and quiz by spamming questions in the hopes of covering every concept with enough depth to get by on the exam.</div>

            <header className='text-3xl'>On this Term's Midterms</header>
            <div className='font-light'>I got markedly worse grades on this batch of midterms. The results of each class can be explained as follows:</div>
            <ul className='font-light list-disc pl-[2rem] '>
                <li>ECE124: Did really well!</li>
                <li>CS 138: Did no practice problems or mock exams, was mentally drained by the time of the exam</li>
                <li>ECE 140: Mentally drained by the time of the exam, did not do enough power-related questions (problem spread was suboptimal)</li>
                <li>ECE 192: One mistake cost 20%, and honestly I felt prepared for this exam; however, there were no previous mocks available so that played a part in my error as no questions of similar wording / format were attempted and solved</li>
                <li>Math 135: Did not study at all, still did pretty good (was open-book)</li>
                <li>Math 119: Extremely voluminous class, did not have enough time to even attempt the mocks, resulting in stupid avoidable errors</li>
            </ul>

            <div className='font-light'>I have always struggled to reach the same amounts of efficiency in learning in coding and sustained work compared to learning right before an important exam. This is something many would attribute to the mental deficiency of procrastination or some other condition that hinders my ability to learn and progress outside of "crunch time". My parents, teachers, and those around me have pushed these ideas onto me, that a lack of motivation or direction is a purely internal issue to be addressed.</div>

            <div className='font-light'>I would argue instead that the lack of motivation and falloff of productivity that I have experienced my whole life has been becuase of a lack of systemic organization and the lack of a good "problem-set". One of the biggest and only advantages of school up until the secondary level is the categorically organized curriculum, encapsulating the relevant knowledge as well as a diverse and dense set of associated problems and assignments to solidify understanding</div>

            <div className='font-light'>The aim of this section is to record and document effective and maybe not-so-effective methods of learning, keeping in mind the following questions: </div>

            <ul className='font-light list-disc pl-[2rem] '>
                <li>What is the <b>relevant content </b>that I will indulge in and aim to internalize?</li>
                <li>What practice will I do and how will I space my practice in a way that <b>maximizes retention and applicable understanding?</b></li>
                <li>How much focus and "brainpower" must I allocate to this topic to consolidate it to my long-term memory?</li>
            </ul>

            <div className='font-light'>As an individual, I think I am more proficient in topic selection and mental task allocation, while I have a dire need to improve my <b>consciousness over practice.</b> </div>

            <div className='font-light'>I have noticed that I am historically most successful in heavily standardized, rigorous course-based systems, despite my hatred of the K-12 system for its rigidity and lack of freedom. I think that my ability to discern relevance in the topics I indulged in let me recognize that many things I learned in school were non-useful and non-applicable to myself. Yet, for my high school years, I failed to do any meaningful self-pursuit into topics that I perceived to be interesting, relevant, or important to myself or those around me. A lack of motivation was the materialization of deeper andragogical weaknesses, not a root cause of any one issue. When my parents, or my own psyche communicated to myself that I was not engaging in meaningful activity and learning skills that I should be learning, my own self was then unable to properly pursue such ideas due to a lack of organizational skill. Ironically, being so unreliant on notes in school growing up as ultimately resulted in me needing to self-document more than the average person.</div>

            <div className='font-light'>I will now try to explore these aspects of learning, as well as strategies to employ to improve the learning experience so that time can be better-spent.</div>

            <header className='text-3xl'>A Note on Tutorial Hell</header>
            <div className='font-light'>For the first 4 months of my time at the University of Waterloo, I was stuck in "tutorial hell". I ultimately came out of the learning endeavor with about 50% of the knowledge and skills I would have built up optimally over the same timeframe. Why was this?</div>

            <div className='font-light'>I can think of two failures: The failure in the <span className='font-semibold'>selection of course material</span> and in the <span className='font-semibold'>frequency and intensity of reinforced practice.</span></div>

            <div className='font-light'>Condensed youtube tutorials aim to squeeze as much content into a 1 hour video as possible, foregoing the <b>relevant explanation and understanding</b> that must be injected into the viewer for mastery. Since such videos end up covering a huge amount of condensed topic, often through a <b>single instance</b> of a frontend website or a full-stack application, viewers often do not seek out extra practice independently, resulting in a failure to build <b>consistency</b>. If you watched a youtube video, and you don't understand how half the React syntax actually works under the hood (or even in that specific case), and you also cannot consistently implement said function becuase you lack practice and therefore adaptability, you have failed to learn anything meaningful. I fell quickly and easily into this trap, deluding myself into thinking I was doing quick, efficient learning, <b>at a faster rate than my peers.</b></div>

        <div className='font-light'>One of my big goals is to optimize my learning, so that I can compete with my peers of greater experience while comitting less time and total effort. Past my career and competitive goals, I want to be able to learn creative skills and indulge in unique endeavors with a higher rate of success, espcially compared to my past self.</div>

        <header className='text-3xl'>Choosing what to Learn</header>

        <div className='font-light'>In this section, I am trying to give myself a concrete guideline on seeking out the correct and relevant topics to learn in order to maximize my progress in all aspects of life. This could look like a few things; say that I wanted to learn how to paint. <b>Effective selection </b> constitutes learning the <b>right skills</b> in the right order to build a <b>solid</b> (artistic) <b>foundation</b>, and then translating that into more advanced creativity, like the finer details. Another example could be having the goal to land a FAANG internship within the next X amount of time. Effective selection would constitute choosing the <b>correct topics</b> and learning / practicing them at the appropriate <b>depth</b> making sure to spend enough time to create a <b>well-rounded knowledge base</b> for interviews. It would also look like learning how to create the best projects to showcase hirability to said companies. Some examples of topics to dive into include DevOps, Networking, Deploying and Scaling Applications, DSA, and so on.</div>

        <header className='text-2xl'>Seeking Out Mentors</header>

        <div className='font-light'>Something I need to start doing, which I haven't been doing enough, is seeking out more experienced people who are further on the journey of learning than myself. These individuals, regardless of whether they were efficient in their own learning, have ended up with the relevant skills and expertise. Asking them for insight on how to learn, <b>as if they were to relearn their skills in a better manner</b>, gives a good framework of learning. Even better is to seek help from people who have <b>completed, finished, and accomplished</b> a goal that you are seeking out to complete. For example, seeking advice from individuals who work at FAANG for learning resources and learning roadmaps is an efficient way to get started.</div>

        <div className='font-light'><i>Note to self:</i> Try and seek out software engineering mentors for internship advice, for next coop. Try and be receptive as possible, and don't be scared to seem stupid or underqualified.</div>

        </div>

        
    )
}