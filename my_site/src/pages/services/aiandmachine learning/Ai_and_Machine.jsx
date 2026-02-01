
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Ai_and_Machine.css'
import ContactModal from "../../../components/layouts/contact modal/ContactModal";

const AiAndMachine = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<section className="ai-hero">
				<div className="breadcrumb">
					<Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt; <span className="active">AI & Machine Learning</span>
				</div>

				<h1 className="ai-title">AI & Machine Learning Solutions to Transform Your Business</h1>

				<p className="ai-subtitle">
					We build intelligent systems — from predictive models to custom
					automation — that help you make better decisions, automate work,
					and unlock new product capabilities.
				</p>

				<button className="ai-btn" onClick={() => setOpen(true)}>Request Consultation</button>
			</section>

			<section className="ai-about container">
				<div className="ai-about-left">
					<img src="/images/ui-ux.avif" alt="AI illustration" />
				</div>

				<div className="ai-about-right">
					<h2>From Prototypes to Production</h2>
					<p>
						Our ML engineers and data scientists work with your data and
						domain experts to design models that are accurate, robust, and
						production-ready.
					</p>

					<ul>
						<li>Custom model development (classification, regression, NLP)</li>
						<li>Computer vision and image analytics</li>
						<li>Model deployment, monitoring & MLOps</li>
						<li>AI strategy, consulting & data pipeline design</li>
					</ul>
				</div>
			</section>

			<section className="ai-benefits container">
				<h2 className="section-title">Why AI & ML?</h2>

				<div className="grid-3">
					<div className="card">
						<h3>Smarter Decisions</h3>
						<p>Extract insights from data to guide product and business choices.</p>
					</div>

					<div className="card">
						<h3>Automation at Scale</h3>
						<p>Automate repetitive tasks and reduce operational costs.</p>
					</div>

					<div className="card">
						<h3>New Products</h3>
						<p>Enable AI-powered features that differentiate your offering.</p>
					</div>
				</div>
			</section>

			<section className="ai-services container">
				<h2 className="section-title1">Our AI Services</h2>

				<div className="grid-3">
					<div className="service-box">
						<img src="/images/digital market.avif" alt="model" />
						<h3>Predictive Modeling</h3>
						<p>Forecast demand, churn, and key business metrics with confidence.</p>
					</div>

					<div className="service-box">
						<img src="/images/web-dev.avif" alt="vision" />
						<h3>Computer Vision</h3>
						<p>Visual AI for detection, recognition, and automated inspection.</p>
					</div>

					<div className="service-box">
						<img src="/images/mobile.avif" alt="mlops" />
						<h3>MLOps & Deployment</h3>
						<p>Deploy reliable models with monitoring, retraining, and CI/CD.</p>
					</div>
				</div>
			</section>

			<section className="ai-process">
				<div className="container">
					<h2 className="section-title">How We Work</h2>

					<div className="process-grid">
						<div className="step">
							<span>01</span>
							<h3>Discovery</h3>
							<p>Define success metrics and assess available data.</p>
						</div>

						<div className="step">
							<span>02</span>
							<h3>Modeling</h3>
							<p>Prototype models, iterate, and validate against business KPIs.</p>
						</div>

						<div className="step">
							<span>03</span>
							<h3>Production</h3>
							<p>Deploy with monitoring, autoscaling, and clear rollback plans.</p>
						</div>

						<div className="step">
							<span>04</span>
							<h3>Optimize</h3>
							<p>Continuous improvement with feedback, A/B testing, and retraining.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="ai-cta">
				<h2>Ready to build with AI?</h2>
				<p>Contact our team to explore a pilot or long-term engagement.</p>

				<button onClick={() => setOpen(true)}>Talk to an Expert</button>
			</section>

			<ContactModal isOpen={open} onClose={() => setOpen(false)} />
		</>
	);
};

export default AiAndMachine;
