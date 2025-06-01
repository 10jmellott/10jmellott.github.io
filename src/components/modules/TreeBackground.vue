<script setup lang="ts">
	import { ref, onMounted, onBeforeUnmount } from 'vue';

	// Defines a tree that may be drawn in the Canvas 2D context
	class Tree {
		ctx: CanvasRenderingContext2D;
		length: number; // Length of the branch
		angle: number; // Angle of the branch (radians)
		children: Tree[] | null = null; // Children branches

		constructor(ctx: CanvasRenderingContext2D, length: number) {
			this.ctx = ctx;
			this.length = length;
			this.angle = 0;
		}

		branch(depth: number) {
			if (depth > 0 && this.length > 10) {
				const rand1 = Math.random() * 0.9 + 1; // 1 to 1.9
				const rand2 = Math.random() * 0.9 + 1;
				const t1 = new Tree(this.ctx, this.length / rand1);
				t1.angle = -Math.PI / (Math.random() * 6 + 6); // PI/6 to PI/12
				t1.branch(depth - 1);
				const t2 = new Tree(this.ctx, this.length / rand2);
				t2.angle = Math.PI / (Math.random() * 6 + 6);
				t2.branch(depth - 1);
				this.children = [t1, t2];
			}
		}

		draw(t: number) {
			this.ctx.save();

			let sway = 0;
			if (t > 0) {
				// Simple noise replacement: use Math.sin for subtle movement
				sway = Math.sin(t + this.length) * (Math.PI / 64);
			}
			this.ctx.rotate(this.angle + sway);

			this.ctx.lineWidth = this.length / 10;
			this.ctx.strokeStyle = 'rgb(193,154,107)';
			this.ctx.beginPath();
			this.ctx.moveTo(0, 0);
			this.ctx.lineTo(0, -this.length);
			this.ctx.stroke();

			if (this.children != null) {
				// Prevents branch to branch seaming
				this.ctx.translate(0, -this.length + this.length / 20);
				this.children[0].draw(t);
				this.children[1].draw(t);
			} else {
				this.ctx.translate(0, -this.length);
				this.ctx.save();
				this.ctx.globalAlpha = 0.47;
				this.ctx.fillStyle = 'rgb(75,100,75)';
				this.ctx.beginPath();
				this.ctx.ellipse(
					0,
					0,
					this.length,
					this.length,
					0,
					0,
					2 * Math.PI
				);
				this.ctx.fill();
				this.ctx.globalAlpha = 1;
				this.ctx.restore();
			}

			this.ctx.restore();
		}
	}

	let t = 0;
	let tree: Tree;
	let animationFrameId: number;
	const canvasRef = ref<HTMLCanvasElement | null>(null);

	function resizeCanvas(canvas: HTMLCanvasElement) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function setupTree(
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	) {
		tree = new Tree(ctx, canvas.height / 6);
		t = Math.random() * 50;
		tree.branch(8);
	}

	function draw() {
		const canvas = canvasRef.value;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.fillStyle = 'rgb(18,17,19)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.translate(canvas.width / 4, canvas.height);
		t += 0.005;
		tree.draw(t);
		ctx.restore();

		animationFrameId = requestAnimationFrame(draw);
	}

	onMounted(() => {
		const canvas = canvasRef.value;
		if (!canvas) return;
		resizeCanvas(canvas);
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		setupTree(ctx, canvas);
		draw();
	});

	onBeforeUnmount(() => {
		cancelAnimationFrame(animationFrameId);
	});
</script>

<template>
	<canvas
		ref="canvasRef"
		class="tree-background"
	></canvas>
</template>

<style>
	.tree-background {
		position: fixed;
		inset: 0;
		display: block;
	}
</style>
