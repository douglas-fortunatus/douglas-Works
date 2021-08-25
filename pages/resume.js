import Link from "next/link";
import React from "react"
import styled from "styled-components";

import Layout, { PageWrapper } from "../components/Layout"
import FooterLink from '../components/Footer';

const Resume = () => {
    const resumeData = 'https://www.canva.com/design/DAEnEJTfLDE/dTjazAy5WTMzWrMBux4n-Q/edit?category=tACZCki4tbY';

    const previewData = `${resumeData.substr(
        0, resumeData.lastIndexOf('/') + 1
    )}view?embed`

    return(
        <Layout title="Resume">
            <PageWrapper>
                <PageSection>
                    <article>
                        <h1 className="intro__text">Resume.</h1>

                        <p>
                            Reach me out via my{' '}

                            <b>
                                <Link href="/contact">
                                    <a>Contact Page</a>
                                </Link>
                            </b>{'  '}
                            .{'  '}

                            <b>
                                <a
                                    href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to Resumé Page"
                                >
                                    View
                                </a>
                            </b>{'  '}
                            or {'  '}

                            <b>
                                <a
                                href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Go to Resumé Page"
                                >
                                download
                                </a>
                            </b>{' '}
                            the resume{' '}
                        </p>
                    </article>

                    <br />

                    <iframe
                        src={previewData}
                        allowFullScreen
                        width="740"
                        height="780"
                        title="Douglas Fortunatus Resume"
                    />
                </PageSection>

                <br />
                <br />
                <FooterLink goto="/contact" className="mt-3 mb-5">
                    Are you convinced to contact me now ?
                </FooterLink>
                <br />
            </PageWrapper>
        </Layout>
    );
}

const PageSection = styled.div`
    .intro__text {
        font-size: var(--font-x-lg);
        font-weight: 900;
        margin: 4rem 0rem 1.5rem;
        position: relative;
    }

    p {
        font-size: calc(var(--font-sm) + 0.9px);
        margin-top: 0.6rem;
        line-height: 2;
        font-weight: 400;
        color: var(--article-color) !important;
    }

    iframe {
        width: 100%;
        filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
        border: none;
        height: 44.5rem;

        @media (min-width: 768px) {
            width: 82.8% !important;
            height: 70.4rem !important;
        }
    }
`;

export default Resume