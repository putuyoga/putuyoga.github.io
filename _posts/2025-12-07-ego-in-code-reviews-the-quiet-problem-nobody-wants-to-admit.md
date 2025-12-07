---
title: Ego in Code Reviews: The Quiet Problem Nobody Wants to Admit
comments: false
---

<img src="https://external-preview.redd.it/GTdHjYiYlvv59IsDe2BICMZDFeD_XjdiuWD9K_kBg-w.jpg?auto=webp&s=a777678275c34a559b2fc43ff2b82537c55f88fc" />

Every engineering team has at least one:
The reviewer who thinks “code review” means “prove I’m smarter.”

These people hide behind correctness.
Their comments technically make sense. The implementation is valid, the rule is real, but the delivery is dripping with ego.

You’ll recognize them immediately by their favorite lines:
- “You should already know this.”
- “We’ve been doing it this way for a while.”
- “If you read through the code, you’d see…”
- “Be familiar with the project.”

None of these statements improves the code.
They only elevate the reviewer’s sense of superiority.

And we need to talk about it.

## When Feedback Is Just a Flex

There’s a massive difference between technical guidance and condescension.

**Healthy review:**

> “We use this pattern here because it integrates with our error pipeline.
> Here’s an example from another module.”

**Ego review:**

> “Why aren’t you following the existing pattern?”

Both aim to improve the code.  
Only one respects the human behind it.

Ego-driven reviewers don’t teach; they perform.
They don’t collaborate, they correct.
Their goal isn’t alignment.
It’s dominance.

## The Unspoken Reality: Nobody Remembers Everything

Our work is constant context switching.
We work across stacks, services, languages, frameworks, and submodules.
Nobody, not even the engineer who thinks they own the codebase, remembers every tiny rule, utility, helper, or convention written months ago.

Healthy reviewers understand this.
Ego reviewers weaponize it.

They treat reminders as failures.
They mistake context switching for incompetence.
They assume forgetting tribal knowledge is a sign of being “less.”

This isn’t high standards.
It’s insecurity dressed as authority.

## The Hidden Damage Bad Reviewers Cause

People think condescending PR comments are harmless.
They’re not.

They push engineers into:
- avoiding certain parts of the code
- opening fewer PRs
- hesitating to experiment
- shipping slower
- carrying unnecessary stress

One toxic reviewer has more impact on velocity than any tech debt.

**A team can always fix messy code.**
But fixing a bruised engineering culture costs much more.

## The Rules of a Good Code Review (That Ego Reviewers Break Constantly)

### 1. Correct the code, not the person

Bad reviewers attack the developer.
Good reviewers address the implementation.

**Bad review:**

> “Why would you write it like this? This makes no sense.”

**Good review:**

> “This function returns `None` in one branch and a `dict` in the other. Can we make the return type consistent?”

### 2. Explain the “why,” not just the rule

Unexplained rules breed confusion and gate-keeping.

**Bad review:**

> “Use the new pattern. We talked about this.”

**Good review:**

> “We switched to the new pattern because it reduces duplication across modules. Updating this file keeps everything aligned.”

### 3. Assume context switching is real

Nobody lives in one repo or module forever. Expect people to forget details.

**Bad review:**

> “We already solved this months ago. How can you forget?”

**Good review:**

> “We solved a similar issue in the campaign module. Here's the link to that PR, the same approach will work here.”

### 4. Keep the tone neutral

Direct is fine. Disrespect is not.  
This is a workplace, not a playground for superiority.

**Bad review:**

> “Why are you using this? This is so wrong.”

Good review:

> “This logic breaks when `pageName` is empty. Adding a guard here will handle that case.”

### 5. Focus on helping the PR land

Not showing off how much documentation you can recite.  
Reminders are what reviews are for, and if it happens often, that’s what tooling is for. Humans make mistakes.

**Bad review:**

> “You missed the extra space again.”

**Good review:**

> “The space is missing. Since this keeps happening, I’ll update the linter so it auto-fixes it.”

### 6. Never hide contempt behind correctness

You can be right and still be a lousy reviewer.  
Accuracy does not excuse attitude.

**Bad review:**

> “Technically, this works, but who is still using this approach in 2025?”

**Good review:**

> “This works, but this approach will make debugging painful later. Using the shared utility avoids that and keeps maintenance simple.”

## As a reviewer, now ask yourself:

- Am I helping my teammate succeed?
- Or am I validating myself at their expense?
- Am I building confidence, or eroding it?

Because code can be rewritten.
People can’t.

Healthy teams invest in both.

I like this one blog post that covers it much more in detail, which you can [read here](https://mtlynch.io/human-code-reviews-1/)

Last but not least.
You’re not Linus Torvalds, and even he learned to tone it down.
Keep your standards high. Not your attitude.
