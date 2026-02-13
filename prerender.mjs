import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { renderToString } from "react-dom/server";
import React from "react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render
const routes = [
	"/",
	"/portfolio",
	"/solutions", 
	"/contact",
];

async function prerender() {
	console.log("🔨 Starting pre-rendering for SSG...");

	const templatePath = path.join(__dirname, "docs/index.html");
	let template = fs.readFileSync(templatePath, "utf-8");

	// Write files with basic rendering (crawler-friendly)
	for (const route of routes) {
		try {
			console.log(`📄 Pre-rendering: ${route}`);

			// Replace root div - keep it empty but add CSS classes for basic styling
			let html = template.replace(
				'<div id="root"></div>',
				`<div id="root" class="min-h-screen bg-background">${getRouteContent(route)}</div>`
			);

			// Add JSON-LD structured data for SEO
			html = html.replace(
				"</head>",
				`<script type="application/ld+json">${JSON.stringify(getSchemaFor(route))}</script>\n  </head>`
			);

			// Determine file path for GitHub Pages
			let filePath;
			if (route === "/") {
				filePath = path.join(__dirname, "docs/index.html");
			} else {
				const routePath = route.replace(/\/$/, "");
				const dir = path.join(__dirname, "docs", routePath);
				fs.mkdirSync(dir, { recursive: true });
				filePath = path.join(dir, "index.html");
			}

			// Write the file
			fs.writeFileSync(filePath, html, "utf-8");
			console.log(`   ✅ Written: ${filePath}`);
		} catch (error) {
			console.error(`   ❌ Error pre-rendering ${route}:`, error.message);
		}
	}

	console.log("✨ Pre-rendering complete!");
}

function getRouteContent(route) {
	const baseContent = {
		"/": `
			<header>Pedro Cerqueira - Software Developer</header>
			<main>
				<section class="hero">
					<h1>Hi, I'm Pedro Cerqueira</h1>
					<p>Full-stack developer with expertise in modern web technologies</p>
				</section>
				<section class="skills">
					<h2>Skills</h2>
					<p>React, TypeScript, Node.js, Full-stack Development</p>
				</section>
			</main>
		`,
		"/portfolio": `
			<header>Portfolio - Pedro Cerqueira</header>
			<main>
				<h1>My Portfolio</h1>
				<p>Check out my recent projects and work experience</p>
				<section class="projects">
					<h2>Featured Projects</h2>
				</section>
			</main>
		`,
		"/solutions": `
			<header>Solutions - Pedro Cerqueira</header>
			<main>
				<h1>Solutions & Services</h1>
				<p>Custom software development and consulting services</p>
				<section class="solutions">
					<h2>What I Offer</h2>
				</section>
			</main>
		`,
		"/contact": `
			<header>Contact - Pedro Cerqueira</header>
			<main>
				<h1>Get in Touch</h1>
				<p>Let's discuss your project</p>
				<section class="contact-form">
					<h2>Contact Information</h2>
				</section>
			</main>
		`,
	};

	return baseContent[route] || baseContent["/"];
}

function getSchemaFor(route) {
	const baseSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Pedro Cerqueira",
		url: "https://github.com/PMCCcv",
		jobTitle: "Software Developer",
		description: "Full-stack developer with expertise in modern web technologies",
	};

	if (route === "/portfolio") {
		return {
			...baseSchema,
			"@type": "Portfolio",
			description: "Professional portfolio of software development projects",
		};
	}

	return baseSchema;
}

prerender().catch((error) => {
	console.error("Pre-render failed:", error);
	process.exit(1);
});
