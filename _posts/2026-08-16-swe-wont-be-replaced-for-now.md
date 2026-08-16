---
title: "SWE Won't Be Replaced… For Now"
comments: true
---

<img src="https://raw.githubusercontent.com/putuyoga/putuyoga.github.io/refs/heads/master/assets/images/sunset.jpg" />

Let me qualify that title immediately, because the qualification is the whole point.

I'm not going to give you another version of `"AI won't replace you, but someone using AI will."` That line has been repeated so many times it's basically become meaningless. It's a comforting half-truth that dodges the actual claim people are worried about. So let me make a different, less comfortable one: AI is not replacing software engineers. It is replacing software engineering, in pieces, unevenly, starting with the parts that were never really the interesting part to begin with.

The boring part. Setting up the environment, writing boilerplate, writing unit tests, figuring out which API to hit for a profile feature. That kind of stuff.

## The Harder Part

That distinction matters, and most of the discourse around it is either too alarmist or too dismissive to actually sit with it. From what I've seen so far, there's still a hard part left, and current AI doesn't touch it. Maintaining production software used by millions of users is a different game from shipping a small internal tool only your boss will ever open. The difference is scale. A small mistake in the first case can be devastating; in the second, nobody notices, except your boss, haha.

This is where judgment matters. Experience is what tells you something is fishy before you can even articulate why. Battle scars from past incidents are genuinely useful. I still get anxious before a big database migration, because I know exactly what a small mistake can do to real users. That anxiety is doing something useful: it pushes me to plan more, plan A, plan B, plan C. Monitoring after a release isn't optional, it's how you catch the hiccup before it becomes an incident.

## Real World Example

And this isn't a hypothetical fear. The industry has enough scar tissue to prove the point.

<img src="https://miro.medium.com/v2/resize:fit:1400/1*dm6lSArePAuy8-YLWhO40g.png" />

> **Knight Capital, 2012**. A routine deployment went to seven of eight production servers. The eighth still had a piece of dead code from 2003 sitting on it, a flag that had been repurposed years later without anyone realizing what would happen if it woke back up on a server that never got the update. Nobody caught it in review. Nobody caught it in the 45 minutes it took to lose $440 million and end a 17-year-old company. We're not talking about the code, we're talking about nobody was watching the *deployment* with the same suspicion they'd apply to the code itself. That's not a coding failure. That's a judgment failure, the instinct to ask "did this actually roll out the way I think it did, on every single host" before walking away from the terminal.


### Another example

<img src="https://i.redd.it/aknq47i11ht71.jpg" style="width: 100%; border: 1px solid #ececec" />

> **GitLab, 2017**. An engineer meant to wipe a secondary replica and ran the command against the primary database instead. 300GB of production data gone in seconds. The part that should scare you more than the typo is what happened next: when they turned to their backups to fix it, most of them didn't work. Nobody had tested a restore in months. The command itself was a human slip anyone could make at 11pm. The real gap was the missing discipline of *verifying your safety net actually catches you before you need it*, which is exactly the kind of unglamorous, unrewarded checking that has nothing to do with writing clever code.

### I promise this is last example! 😛

<img src="https://miro.medium.com/v2/resize:fit:1170/0*iU-dhVbAghEQ70W2" style="width: 100%; border: 1px solid #ececec" />

> **CrowdStrike, 2024**. A single bad update file, pushed to every endpoint on earth simultaneously, no staged rollout, no canary group, no circuit breaker to auto-halt the rollout when things started going wrong. 8.5 million machines blue-screened at once, and because the failure was at the kernel level, most of them couldn't even be fixed remotely. The bug itself was probably a small thing. The decision to ship it to 100% of the world in one shot, with no automated brake, was the actual failure, and that's a call about how much you trust your own testing, made by a human, that no model was in the room for.

Three completely different companies, three completely different kinds of code, and the actual root cause in every one of them was the same shape: not "the code was wrong,", it was "nobody applied the paranoia that scale demands." That's not a skill you learn just by generating code faster. It's the thing that's left after you take the code-generation part away.

## So what now?

So from where I sit, the coding part, and even a lot of the deploying, can mostly be handed to AI now. But the plan A/B/C thinking, the anxiety that makes you double-check, the judgment call in the moment something looks off, that part still needs a human.

So yeah, back to the title. The engineer won't be replaced anytime soon. Especially who maintain high stake system. But again, who can predict the future? Nonetheless, I'm still excited with this next wave of this industry revolution.