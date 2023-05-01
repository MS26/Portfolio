<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

    <style>
        h1, h2, h3, h4, h5, h6, p, pre, span, label, button, a, div, input, textarea, select {
            font-family: 'Calibre','Inter','San Francisco','SF Pro Text', -apple-system, system-ui, sans-serif;
            font-style: normal;
            font-variant: normal;

            text-rendering: optimizeLegibility !important;
            -webkit-font-smoothing: antialiased !important;
        }

        h1 {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #84ade5;

            font-weight: 700;
            font-size: 3.5rem;

            margin: 0.5rem 0;
        }

        h2 {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #0a192f;

            font-weight: 700;
            font-size: 2.5rem;

            margin: 0.5rem 0;
        }

        h4 {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #84ade5;

            font-weight: 700;
            font-size: 1.5rem;

            margin: 0.5rem 0;
        }

        h5 {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #0a192f;

            font-weight: 500;
            font-size: 1.5rem;

            margin: 0.5rem 0;
        }

        h6 {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #112240;

            font-weight: 700;
            font-size: 1rem;

            margin: 0.5rem 0;
        }

        strong {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #0a192f;

            font-weight: 700;
            font-size: 0.6rem;
        }

        span, p {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #0a192f;

            font-weight: 500;
            font-size: 0.6rem;
        }


        a {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

            color: #112240;

            font-weight: 500;
            font-size: 0.75rem;

            text-decoration: none;
        }

        body {
            margin: 1rem;
        }

        svg {
            color: #0a192f;
            fill: #0a192f;
            width: 20px;
            height: 20px;

            margin-left: 0.5rem;
        }

        .overview-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .overview-container .overview-item {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            margin: 0.5rem 0;
        }

        .flex-container {
            display: flex;
            justify-content: space-between;

            margin-right: 1rem;
        }

        .flex-container .experience-container {
            margin: 0.75rem 0;
        }

        .flex-container .experience-container .experience-container-item {
            margin: 1rem 0;
        }

        .flex-container .experience-container .experience-container-item:first-of-type {
            margin-top: 0;
        }

        .flex-container .experience-container .experience-container-item:last-of-type {
            margin-bottom: 0;
        }

        .flex-container .experience-container .experience-container-item .experience-container-item-description {
            margin: 0.25rem 0 0.5rem 0;
        }

        .flex-container .experience-container .experience-container-item .experience-container-item-highlight {
            margin: 0.25rem 0;
        }

        .flex-container .experience-container .experience-container-item:first-of-type {
            margin-top: 0;
        }

        .flex-container .experience-container .experience-container-item:last-of-type {
            margin-bottom: 0;
        }

        .flex-row-container {
            display: flex;
            flex-direction: column;
            align-content: flex-start;

            max-width: 25%;

            margin-left: 1rem;
        }

        .flex-row-container .skills-container {
            margin: 0.75rem 0;
        }

        .flex-row-container .skills-container .skills-container-item {
            margin-right: 0.5rem;
        }

        .flex-row-container .clients-container {
            margin: 0.75rem 0;
        }

        .flex-row-container .clients-container .clients-container-item {
            margin-right: 0.5rem;
        }

        .flex-row-container .projects-container {
            margin: 0.75rem 0;
        }

        .flex-row-container .projects-container .projects-container-item {
            margin: 1rem 0;
        }

        .flex-row-container .projects-container .projects-container-item:first-of-type {
             margin-top: 0;
         }

        .flex-row-container .projects-container .projects-container-item:last-of-type {
             margin-bottom: 0;
         }

        .flex-row-container .education-container {
            margin: 0.75rem 0;
        }

        .flex-row-container .education-container .education-container-item {
            margin: 1rem 0;
        }

        .flex-row-container .education-container .education-container-item:first-of-type {
            margin-top: 0;
        }

        .flex-row-container .education-container .education-container-item:last-of-type {
            margin-bottom: 0;
        }
    </style>
</head>

<body>
<div class="flex-container">
    <div>
        <h1>{{basics.name}}</h1>
        <h5>{{basics.label}}</h5>
    </div>

    <div class="overview-container">
        <div class="overview-item">
            <span>{{basics.website}}</span>

            <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <title>Website</title>
                <path d="M21.3 23.2V8.6l1.5 1.1c.1.1.3.1.4.1.3 0 .5-.1.7-.4.2-.4.1-.8-.3-1L12.4.1c-.2-.1-.5-.1-.7 0L.4 8.4c-.4.3-.5.7-.3 1.1.2.4.7.5 1 .3l1.5-1.2v14.6c.1.5.4.8.8.8h17.2c.4 0 .7-.3.7-.8zm-7.3-.7h-4v-8h4v8zm5.8 0h-4.3v-8.7c0-.4-.3-.8-.8-.8H9.2c-.4 0-.8.3-.8.8v8.7H4.2v-15L12 1.6l7.8 5.9v15z"/>
            </svg>
        </div>

        <div class="overview-item">
            <span>{{basics.email}}</span>

            <svg role="img" viewBox="0 0 512 512" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <title>Email</title>
                <path d="M480,80H32C14.336,80,0,94.336,0,112v18.208l256,108.416l256-108.448V112C512,94.336,497.664,80,480,80z"/>
                <path d="M262.24,270.72c-1.984,0.864-4.128,1.28-6.24,1.28s-4.256-0.416-6.24-1.28L0,164.96V400c0,17.664,14.336,32,32,32h448 c17.664,0,32-14.336,32-32V164.96L262.24,270.72z"/>
            </svg>
        </div>

        <div class="overview-item">
            <span>{{basics.github.url}}</span>

            <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        </div>
    </div>
</div>

<div class="flex-container">
    <div class="experience-container">
        <h4>Experience</h4>

        {{#work}}
            <div class="experience-container-item">
                <header>
                    <h6>{{position}}</h6>

                    <div>
                        <strong>{{name}}</strong>
                    </div>

                    <div>
                        <strong>{{startDate}}</strong>

                        {{#endDate}}
                            <strong> - {{endDate}}</strong>
                        {{/endDate}}
                        {{^endDate}}
                            <strong> - Present</strong>
                        {{/endDate}}
                    </div>
                </header>

                <footer>
                    <p class="experience-container-item-description">{{{summary}}}</p>

                    {{#highlights}}
                        <div class="experience-container-item-highlight">
                            <strong>{{title}}: </strong> <span>{{{description}}}</span>
                        </div>
                    {{/highlights}}
                </footer>
            </div>
        {{/work}}
    </div>

    <div class="flex-row-container">
        <div class="skills-container">
            <h4>Skills</h4>

            {{#skills}}
                <span class="skills-container-item">{{.}}</span>
            {{/skills}}
        </div>

        <div class="clients-container">
            <h4>Clients</h4>

            {{#clients}}
                <span class="clients-container-item">{{.}}</span>
            {{/clients}}
        </div>

        <div class="projects-container">
            <h4>Projects</h4>

            {{#projects}}
                <div class="projects-container-item">
                    <div>
                        <strong>{{name}}</strong>
                    </div>
                    <span>{{description}}</span>
                </div>
            {{/projects}}
        </div>

        <div class="education-container">
            <h4>Education</h4>

            {{#education}}
                <div class="education-container-item">
                    <div>
                        <strong>{{area}}</strong>

                        <div>
                            <strong>{{startDate}}</strong>

                            {{#endDate}}
                                <strong> - {{endDate}}</strong>
                            {{/endDate}}
                            {{^endDate}}
                                <strong> - Present</strong>
                            {{/endDate}}
                        </div>
                    </div>
                    <span>Studying a {{studyType}} at {{institution}}.</span>
                </div>
            {{/education}}
        </div>
    </div>
</div>
</body>
</html>