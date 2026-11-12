let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', gainValue = 0.08, delay = 0) {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(gainValue, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration);
}

export function playTick(muted: boolean) {
  if (muted) return;
  playTone(680, 0.06, 'triangle', 0.05);
}

export function playTimeUp(muted: boolean) {
  if (muted) return;
  playTone(523.25, 0.14, 'triangle', 0.09, 0);
  playTone(659.25, 0.22, 'triangle', 0.09, 0.12);
}

export function playSuccess(muted: boolean) {
  if (muted) return;
  playTone(523.25, 0.12, 'sine', 0.08, 0);
  playTone(659.25, 0.12, 'sine', 0.08, 0.09);
  playTone(783.99, 0.22, 'sine', 0.09, 0.18);
}

export function playFail(muted: boolean) {
  if (muted) return;
  playTone(310, 0.15, 'sawtooth', 0.04, 0);
  playTone(240, 0.22, 'sawtooth', 0.04, 0.12);
}
