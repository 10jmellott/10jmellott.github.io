<script setup lang="ts">
	// Use type import for p5
	import type p5 from 'p5';
	import { ref, onMounted } from 'vue';

	// Defines a tree that may be drawn in the p5 framework
	class Tree {
		p: p5;
		length: number; // Length of the branch
		angle: number; // Angle of the branch
		children: Tree[] | null = null; // Children branches

		// Create a tree with the specified initial length
		constructor(p: p5, length: number) {
			this.p = p;
			this.length = length;
			this.angle = 0;
		}

		branch(depth: number) {
			if (depth > 0 && this.length > 10) {
				const t1 = new Tree(
					this.p,
					this.length / this.p.random(1, 1.9)
				);
				t1.angle = -this.p.PI / this.p.random(6, 12);
				t1.branch(depth - 1);
				const t2 = new Tree(
					this.p,
					this.length / this.p.random(1, 1.9)
				);
				t2.angle = this.p.PI / this.p.random(6, 12);
				t2.branch(depth - 1);
				this.children = [t1, t2];
			}
		}

		draw(t: number) {
			this.p.push();

			if (t > 0) {
				this.p.rotate(
					this.angle +
						this.p.map(
							this.p.noise(t),
							0,
							1,
							-this.p.PI / 64,
							this.p.PI / 64
						)
				);
			} else {
				this.p.rotate(this.angle);
			}

			this.p.strokeWeight(this.length / 10);
			this.p.stroke(193, 154, 107);
			this.p.line(0, 0, 0, -this.length);

			if (this.children != null) {
				// Prevents branch to branch seaming
				this.p.translate(0, -this.length + this.length / 20);

				this.children[0].draw(t);
				this.children[1].draw(t);
			} else {
				this.p.translate(0, -this.length);

				this.p.noStroke();
				this.p.fill(75, 100, 75, 120);
				this.p.ellipse(0, 0, this.length * 2, this.length * 2);
			}

			this.p.pop();
		}
	}

	let t: number;
	let tree: Tree;

	function setup(p: p5) {
		p.createCanvas(p.windowWidth, p.windowHeight);
		tree = new Tree(p, p.height / 6);
		t = p.random(50);
		tree.branch(8);
	}

	function draw(p: p5) {
		p.background(18, 17, 19);
		t += 0.005;

		p.push();
		p.translate(p.width / 4, p.height);
		tree.draw(t);
		p.pop();
	}

	function windowResized(p: p5) {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	}

	const canvas = ref<HTMLDivElement>();

	onMounted(async () => {
		const p5Module = await import('p5');
		const p5 = p5Module.default;
		new p5((p: p5) => {
			p.setup = () => setup(p);
			p.draw = () => draw(p);
			p.windowResized = () => windowResized(p);
		}, canvas.value);
	});
</script>

<template>
	<div
		ref="canvas"
		class="tree-background"
	></div>
</template>

<style>
	.tree-background {
		z-index: -1;
		position: fixed;
		width: 100%;
		height: 100%;
		inset: 0;

		canvas {
			display: block;
		}
	}
</style>
