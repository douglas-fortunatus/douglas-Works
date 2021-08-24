import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

import { Date, Github, Product } from '../components/Icons';

const About = () => {
    return(
        <Layout title="About Me">
            <PageSection>
                <PageWrapper
                    className="mb-5"
                    aria-label="This are things you need to know about me"
                >
                    <h1 className="intro__text">About Me.</h1> <br />

                    <article>
                        <ul className="timeline">
                            <li className="mt-2">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Github Link"
                                    href="https://github.com/adenekan41"
                                >
                                    Engineering{' '}
                                    <small>
                                        <Github />
                                    </small>
                                </a>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Github Link"
                                    href="https://github.com/adenekan41"
                                    className="float-right"
                                >
                                    View Github
                                </a>

                                <p>
                                    Developing has always been a intresting subject to me
                                    Developing has always been a intresting subject to me. Being 
                                    able to develop softwares that solve peoples problems and make
                                    peoples life easy has bring a masive impact to my life.
                                    Technology has been a go to relay on in this world 🌍 of today.
                                    I am sure my technological skills can bring tour ideas to life.
                                    What you need to know is that I have extensive knowledge of
                                    recognized technical standards and i'm familiar with modern build practices.
                                </p>
                            </li>

                            <li>
                                <Link href="/projects">
                                    <a aria-label="Open Products Page">
                                        Product{' '}
                                        <small>
                                            <Product />
                                        </small>
                                    </a>
                                </Link>
                                <Link href="/projects">
                                    <a aria-label="Open Products Page" className="float-right">
                                        View Products
                                    </a>
                                </Link>
                                <p>
                                    I don’t like to define myself by the work I’ve done. 
                                    I define myself by the work I want to do. Skills can be taught, 
                                    personality is inherented. I prefer to keep learning, 
                                    continue challenging myself, and do interesting things that matter. 
                                    I'm strongly in depth in research, product design and product co-ordination 
                                    that would help the product grow from 0 - 1.
                                </p>
                            </li>
                        </ul>
                    </article>
                </PageWrapper>
            </PageSection>

            <PageWrapper>
                <FooterLink goto="/projects" className="mt-3 mb-5">
                    Lets Continue To Projects
                </FooterLink>
                <br />
            </PageWrapper>
        </Layout>
    )
}

const PageSection = styled.div`
    .intro__text {
        font-size: var(--font-x-lg);
        font-weight: 900;
        margin: 4rem 0rem 1.5rem;
        position: relative;
    }

    h4 {
        font-size: calc(var(--font-md) + 1.5px);
    }

    p {
        font-size: calc(var(--font-sm) + 0.9px);
        margin-top: 0.6rem;
        line-height: 2;
        font-weight: 400;
        color: var(--article-color) !important;
    }

    ul.timeline {
        list-style-type: none;
        position: relative;

        &:before {
            content: ' ';
            background: var(--timeline);
            display: inline-block;
            position: absolute;
            left: 0px;
            width: 1px;
            top: 4px;
            height: 100%;
            z-index: 400;
        }

        li {
            margin: 3rem 0;
            padding-left: 20px;

            &:before {
                content: ' ';
                background: var(--mark);
                display: inline-block;
                position: absolute;
                border-radius: 50%;
                border: 2px solid var(--cw);
                left: -7px;
                width: 15px;
                height: 15px;
                margin-top: 3px;
                z-index: 400;
            }

            a {
                font-size: var(--font-md);
                font-weight: 500;
                color: var(--cw);

                &.float-right {
                    text-decoration: underline;
                    font-size: calc(var(--font-sm) + 0.9px);
                }
            }

            a svg {
                margin-top: -0.4rem;
                width: 13px;
            }
        }
    }

    @media (max-width: 585px) {
        ul.timeline li a {
            display: block;
            float: none !important;
            margin-top: 5px;
        }
    }

    @media (max-width: 989px) {
        ul.timeline li a {
            display: block;
            float: none !important;
            margin-top: 5px;
        }
    }

    @media (max-width: 220px) {
        ul.timeline li a {
            display: block;
            float: none !important;
            margin-top: 5px;
        }
    }
`;

export default About;