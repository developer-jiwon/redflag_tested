export type Category =
  | "The Narcissist Syndrome"
  | "The Puppet Master"
  | "The Control Freak"
  | "The Shady Liar"
  | "The Ice King/Queen"
  | "The Walking Time Bomb"
  | "The Escape Artist"
  | "The Money Leech"
  | "The Chaos Magnet"
  | "The Danger Zone"
  | "The History Haunter"
  | "The Double Life"

export interface Question {
  id: number
  category: Category
  text: string
  isRedFlag: boolean
}

export interface AssessmentResult {
  range: [number, number]
  level: string
  description: string
  detailedFeedback: string
  resources: string[]
}

export const assessmentCriteria: Record<string, AssessmentResult[]> = {
  "The Narcissist Syndrome": [
    {
      range: [0, 3],
      level: "Low Narcissistic Tendency",
      description: "Occasional self-centered moments are normal, but overall, these behaviors are likely just occasional quirks.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Narcissistic Traits",
      description: "There's a consistent pattern of self-focus that might sometimes overshadow the relationship. It's worth keeping an eye on and addressing early.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Narcissistic Risk",
      description: "These strong indicators suggest a deeply ingrained pattern of narcissistic behavior. If you see this many red flags, it might be time to re-evaluate the relationship and consider setting firm boundaries or seeking support.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Puppet Master": [
    {
      range: [0, 3],
      level: "Low Puppet Master Tendencies",
      description: "Occasional manipulative behaviors might pop up in anyone, but these responses indicate that control through manipulation isn't a major pattern.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Puppet Master Traits",
      description: "A noticeable pattern of guilt-tripping, twisting words, and playing the victim suggests a moderate level of manipulative behavior. It might be a good idea to set clear boundaries and communicate openly about your concerns.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Puppet Master Risk",
      description: "These responses strongly indicate that the person is consistently using manipulative tactics. If you see this many red flags, it's important to re-evaluate the relationship and consider seeking support or creating distance to protect your emotional well-being.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Control Freak": [
    {
      range: [0, 3],
      level: "Low Control Tendency",
      description: "Occasional concerns might pop up, but overall, these behaviors aren't a major issue. You likely enjoy a healthy amount of independence and mutual respect.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Control Traits",
      description: "There's a noticeable pattern of controlling behavior. While not overwhelming, it might be worth setting some boundaries and discussing your need for autonomy.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Control Risk",
      description: "These strong indicators suggest that the person may be excessively controlling. It might be time to re-evaluate the relationship and consider if you're comfortable with the level of control being exerted over your life.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Shady Liar": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "Occasional lapses in honesty can happen, but these responses suggest that outright deception isn't a pervasive issue in their behavior.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There's a noticeable pattern of evasiveness or dishonesty. It might be wise to be cautious and seek more clarity in your communications.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "These responses strongly indicate frequent dishonesty and secrecy. If you see this many red flags, it may be time to seriously re-evaluate the trust and openness in the relationship.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Ice King/Queen": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "Occasional emotional distance or avoidance might just be a temporary phase or a reflection of their personality, but overall, it's not a major concern.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There's a noticeable pattern of emotional distance and avoidance of commitment. It could be a sign that you might need to have a conversation about emotional availability and expectations.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "These responses strongly indicate that the person may be consistently emotionally unavailable, dismissive of your feelings, and reluctant to commit. If you see this many red flags, it might be time to re-evaluate whether this relationship meets your emotional needs.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Walking Time Bomb": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "Occasional outbursts might occur under stress, but overall, these behaviors don't appear to be a persistent pattern.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There is a noticeable tendency toward explosive reactions and manipulative silence. It might be a good idea to discuss your concerns and work on healthier communication patterns.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "These strong indicators suggest a recurring pattern of explosive behavior and emotional manipulation. If you see this many red flags, it's important to re-evaluate the relationship and consider seeking support or establishing clear boundaries.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Escape Artist": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "Occasional commitment avoidance might just be a temporary phase or a reflection of their personality, but overall, it's not a major concern.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There's a noticeable pattern of emotional distance and avoidance of commitment. It could be a sign that you might need to have a conversation about emotional availability and expectations.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "These responses strongly indicate that the person may be consistently emotionally unavailable, dismissive of your feelings, and reluctant to commit. If you see this many red flags, it might be time to re-evaluate whether this relationship meets your emotional needs.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Money Leech": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "They may have occasional financial struggles, but they take responsibility and don't rely on you to bail them out.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There's a pattern of financial irresponsibility and reliance on you. If this continues, it could create long-term stress in the relationship.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "This person is likely financially dependent on you and not taking responsibility for their own situation. If they aren't willing to change, you may want to reconsider the dynamic of this relationship.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Chaos Magnet": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "They might have occasional issues (who doesn't?), but they generally handle their own problems.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There's a clear pattern of instability. If you're constantly helping them clean up their messes, this could be a red flag.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "This person thrives on chaos and might be dragging you into their whirlwind of drama, financial issues, and legal trouble. If you're always caught in their storms, it might be time to step back and protect your peace.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Danger Zone": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "While some concerning behaviors exist, they don't appear to form a pattern of control or abuse. However, stay vigilant of any escalation.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk - Seek Support",
      description: "There's a concerning pattern of threatening or controlling behavior. Consider speaking with a counselor or domestic violence hotline for guidance.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk - Take Action",
      description: "These are serious warning signs of an abusive relationship. Please reach out to domestic violence support services or trusted people for help creating a safety plan.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The History Haunter": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "They might occasionally mention past relationships, but it doesn't dominate your current relationship.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There's a concerning pattern of living in the past and making comparisons. This could be affecting your relationship's ability to grow.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "They appear to be deeply stuck in their past relationships, which is preventing your relationship from developing in a healthy way. This might require serious discussion or re-evaluation.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ],
  "The Double Life": [
    {
      range: [0, 3],
      level: "Low Risk",
      description: "Some privacy is normal, but there don't seem to be any major concerns about hidden aspects of their life.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [4, 7],
      level: "Moderate Risk",
      description: "There are noticeable patterns of secrecy and inconsistency that warrant further attention and open discussion.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    },
    {
      range: [8, 10],
      level: "High Risk",
      description: "Multiple signs point to deliberately hidden aspects of their life. This level of secrecy and deception is a serious concern that needs to be addressed.",
      detailedFeedback: "Placeholder for detailed feedback.",
      resources: ["https://example.com/resource1", "https://example.com/resource2"]
    }
  ]
}

export const categories: { id: number; title: Category; description: string }[] = [
  {
    id: 1,
    title: "The Narcissist Syndrome",
    description: "Thinks they're superior, lacks empathy, and never takes blame.",
  },
  {
    id: 2,
    title: "The Puppet Master",
    description: "Twists words, guilt-trips, and plays the victim to control you.",
  },
  {
    id: 3,
    title: "The Control Freak",
    description: "Obsessed with controlling where you go, who you see, and what you do.",
  },
  {
    id: 4,
    title: "The Shady Liar",
    description: "Lies constantly, hides their phone, and avoids serious conversations.",
  },
  {
    id: 5,
    title: "The Ice King/Queen",
    description: "Emotionally distant, dismisses your feelings, and avoids commitment.",
  },
  {
    id: 6,
    title: "The Walking Time Bomb",
    description: "Loves yelling, blaming, and using the silent treatment to manipulate.",
  },
  {
    id: 7,
    title: "The Escape Artist",
    description: "Runs away from commitment, keeps things vague, and disappears often.",
  },
  {
    id: 8,
    title: "The Money Leech",
    description: "Irresponsible with money, borrows constantly, or expects you to pay.",
  },
  {
    id: 9,
    title: "The Chaos Magnet",
    description: "Always in drama, financial mess, or legal trouble—brings chaos into your life.",
  },
  {
    id: 10,
    title: "The Danger Zone",
    description: "Uses threats, insults, or physical harm to establish control over you.",
  },
  {
    id: 11,
    title: "The History Haunter",
    description: "Constantly brings up exes, compares you to past relationships, and lives in the past.",
  },
  {
    id: 12,
    title: "The Double Life",
    description: "Has unexplained absences, and different versions of stories.",
  },
]

export const quizData: Question[] = [
  // Narcissist Syndrome Questions
  { 
    id: 1, 
    category: "The Narcissist Syndrome", 
    text: "Center of the Universe: Does this person always redirect conversations to their own stories or accomplishments, regardless of what you're sharing?", 
    isRedFlag: true 
  },
  { 
    id: 2, 
    category: "The Narcissist Syndrome", 
    text: "Compliment Craver: Do they demand constant praise and admiration as if every day is a spotlight moment just for them?", 
    isRedFlag: true 
  },
  { 
    id: 3, 
    category: "The Narcissist Syndrome", 
    text: "Emotion Dismissal: When you share your feelings, do they brush them off or insist that you're overreacting?", 
    isRedFlag: true 
  },
  { 
    id: 4, 
    category: "The Narcissist Syndrome", 
    text: "Blame Shifter: When things go wrong, do they rarely own up to mistakes, instead pointing fingers at you or others?", 
    isRedFlag: true 
  },
  { 
    id: 5, 
    category: "The Narcissist Syndrome", 
    text: "Attention Magnet: Do they consistently make it all about 'them,' leaving little room for your input or experiences?", 
    isRedFlag: true 
  },
  { 
    id: 6, 
    category: "The Narcissist Syndrome", 
    text: "Story Minimizer: When you try to discuss something important, do they quickly change the subject or downplay your experience?", 
    isRedFlag: true 
  },
  { 
    id: 7, 
    category: "The Narcissist Syndrome", 
    text: "Empathy Evader: Have you noticed they rarely show genuine concern for your feelings or the struggles of others?", 
    isRedFlag: true 
  },
  { 
    id: 8, 
    category: "The Narcissist Syndrome", 
    text: "Criticism Dodger: Do they react defensively or even aggressively when you offer constructive feedback, making it personal?", 
    isRedFlag: true 
  },
  { 
    id: 9, 
    category: "The Narcissist Syndrome", 
    text: "Superiority Complex: Do they frequently compare themselves to others, emphasizing how much better or unique they are?", 
    isRedFlag: true 
  },
  { 
    id: 10, 
    category: "The Narcissist Syndrome", 
    text: "Self-Obsessed: Do they appear completely absorbed in their own needs and desires, often ignoring yours?", 
    isRedFlag: true 
  },
  // Puppet Master Questions
  { 
    id: 101, 
    category: "The Puppet Master", 
    text: "Guilt-Tripping Tactics: Do they frequently make you feel guilty for not doing what they want, even when your decision is perfectly reasonable?", 
    isRedFlag: true 
  },
  { 
    id: 102, 
    category: "The Puppet Master", 
    text: "Victim Playing: Do they often portray themselves as the victim in most conflicts, even when the situation isn't one-sided?", 
    isRedFlag: true 
  },
  { 
    id: 103, 
    category: "The Puppet Master", 
    text: "Twisting Your Words: Have you noticed that they routinely twist or misinterpret what you say to fit their narrative?", 
    isRedFlag: true 
  },
  { 
    id: 104, 
    category: "The Puppet Master", 
    text: "Emotional Leverage: Do they use your personal vulnerabilities or past experiences against you during disagreements?", 
    isRedFlag: true 
  },
  { 
    id: 105, 
    category: "The Puppet Master", 
    text: "Unfair Blame: Do they habitually shift the blame onto you for problems that are clearly their responsibility?", 
    isRedFlag: true 
  },
  { 
    id: 106, 
    category: "The Puppet Master", 
    text: "Passive-Aggressive Behavior: Do they resort to subtle, indirect ways (like giving the silent treatment or backhanded compliments) to express their displeasure?", 
    isRedFlag: true 
  },
  { 
    id: 107, 
    category: "The Puppet Master", 
    text: "Gaslighting Moments: Have they made you question your own memory or perception of events by insisting you're overreacting or misremembering things?", 
    isRedFlag: true 
  },
  { 
    id: 108, 
    category: "The Puppet Master", 
    text: "Conversation Control: Do they often steer discussions in such a way that your opinions or concerns get minimized or dismissed?", 
    isRedFlag: true 
  },
  { 
    id: 109, 
    category: "The Puppet Master", 
    text: "Dependency Creation: Do they make you feel uniquely responsible for their emotional well-being, as if only you can solve their problems?", 
    isRedFlag: true 
  },
  { 
    id: 110, 
    category: "The Puppet Master", 
    text: "Avoiding Reciprocity: When you bring up issues or try to resolve conflicts, do they refuse to acknowledge your perspective or offer any compromise?", 
    isRedFlag: true 
  },
  // Control Freak Questions
  { 
    id: 201, 
    category: "The Control Freak", 
    text: "Whereabouts Monitoring: Do they insist on knowing your location at all times, even during everyday activities?", 
    isRedFlag: true 
  },
  { 
    id: 202, 
    category: "The Control Freak", 
    text: "Decision-Making Dominance: Do they regularly decide where you'll go, what you'll do, or which places to visit without asking your input?", 
    isRedFlag: true 
  },
  { 
    id: 203, 
    category: "The Control Freak", 
    text: "Social Circle Gatekeeping: Do they get upset or suspicious when you spend time with friends or family without them?", 
    isRedFlag: true 
  },
  { 
    id: 204, 
    category: "The Control Freak", 
    text: "Rule Setting: Do they set strict rules about how you should spend your free time or who you should interact with?", 
    isRedFlag: true 
  },
  { 
    id: 205, 
    category: "The Control Freak", 
    text: "Digital Surveillance: Do they monitor your phone calls, texts, or social media interactions without a clear reason?", 
    isRedFlag: true 
  },
  { 
    id: 206, 
    category: "The Control Freak", 
    text: "Constant Check-Ins: Do they require you to frequently check in or update them on your activities throughout the day?", 
    isRedFlag: true 
  },
  { 
    id: 207, 
    category: "The Control Freak", 
    text: "Dismissed Opinions: When you suggest an alternative plan, do they dismiss your ideas in favor of their own preferences?", 
    isRedFlag: true 
  },
  { 
    id: 208, 
    category: "The Control Freak", 
    text: "Decision Monopolization: Do they often make decisions for both of you without consulting you first?", 
    isRedFlag: true 
  },
  { 
    id: 209, 
    category: "The Control Freak", 
    text: "Exclusive Plans: Do they become angry or withdrawn if you make plans that don't include them?", 
    isRedFlag: true 
  },
  { 
    id: 210, 
    category: "The Control Freak", 
    text: "Independence Criticism: Do they make you feel guilty for wanting personal space or time to do things on your own?", 
    isRedFlag: true 
  },
  // Shady Liar Questions
  { 
    id: 301, 
    category: "The Shady Liar", 
    text: "Inconsistent Stories: Do they often provide contradictory information about their whereabouts or past events?", 
    isRedFlag: true 
  },
  { 
    id: 302, 
    category: "The Shady Liar", 
    text: "Changing Details: When you ask follow-up questions, do they frequently change or omit details from their story?", 
    isRedFlag: true 
  },
  { 
    id: 303, 
    category: "The Shady Liar", 
    text: "Caught in a Lie: Have you ever caught them in a lie about something that should be straightforward?", 
    isRedFlag: true 
  },
  { 
    id: 304, 
    category: "The Shady Liar", 
    text: "Phone Secrecy: Do they hide their phone, delete messages, or get defensive when you ask about their digital activity?", 
    isRedFlag: true 
  },
  { 
    id: 305, 
    category: "The Shady Liar", 
    text: "Avoiding Depth: Do they steer clear of serious conversations about their life, feelings, or personal experiences?", 
    isRedFlag: true 
  },
  { 
    id: 306, 
    category: "The Shady Liar", 
    text: "Too Smooth to Be True: Does it feel like their stories are too rehearsed or overly polished, as if they're trying to impress?", 
    isRedFlag: true 
  },
  { 
    id: 307, 
    category: "The Shady Liar", 
    text: "Contradictory Actions: Do their actions often contradict what they say, making you doubt their honesty?", 
    isRedFlag: true 
  },
  { 
    id: 308, 
    category: "The Shady Liar", 
    text: "Deflecting Questions: When you ask for clarification about something important, do they quickly change the topic or deflect the question?", 
    isRedFlag: true 
  },
  { 
    id: 309, 
    category: "The Shady Liar", 
    text: "Overpromising: Do they make big promises without following through or providing clear explanations?", 
    isRedFlag: true 
  },
  { 
    id: 310, 
    category: "The Shady Liar", 
    text: "Instant Trust Pressure: Do they insist that you trust them completely, even when you have valid concerns or need more information?", 
    isRedFlag: true 
  },
  // Ice King/Queen Questions
  { 
    id: 401, 
    category: "The Ice King/Queen", 
    text: "Emotional Unavailability: Do they often seem emotionally unavailable when you're looking for comfort or support?", 
    isRedFlag: true 
  },
  { 
    id: 402, 
    category: "The Ice King/Queen", 
    text: "Shallow Conversations: Do they rarely engage in deep, meaningful conversations about feelings or personal experiences?", 
    isRedFlag: true 
  },
  { 
    id: 403, 
    category: "The Ice King/Queen", 
    text: "Dismissive Responses: When you share your emotions, do they quickly dismiss them or tell you that you're overreacting?", 
    isRedFlag: true 
  },
  { 
    id: 404, 
    category: "The Ice King/Queen", 
    text: "Avoiding Vulnerability: Do they avoid talking about their own feelings, even when the conversation naturally turns that way?", 
    isRedFlag: true 
  },
  { 
    id: 405, 
    category: "The Ice King/Queen", 
    text: "Commitment Evasion: When the topic of commitment or future plans comes up, do they change the subject or act uncomfortable?", 
    isRedFlag: true 
  },
  { 
    id: 406, 
    category: "The Ice King/Queen", 
    text: "Minimizing Emotions: Do they downplay or minimize your emotional experiences, making you feel like your feelings aren't important?", 
    isRedFlag: true 
  },
  { 
    id: 407, 
    category: "The Ice King/Queen", 
    text: "Changing the Subject: When you discuss something personal, do they often divert the conversation to less emotional topics?", 
    isRedFlag: true 
  },
  { 
    id: 408, 
    category: "The Ice King/Queen", 
    text: "Lack of Empathy: Do they rarely offer emotional support or seem genuinely interested in your struggles?", 
    isRedFlag: true 
  },
  { 
    id: 409, 
    category: "The Ice King/Queen", 
    text: "Busy Excuses: Do they frequently use being 'too busy' as a reason to avoid emotional or intimate conversations?", 
    isRedFlag: true 
  },
  { 
    id: 410, 
    category: "The Ice King/Queen", 
    text: "Future Avoidance: Have they consistently avoided talking about the future or making plans that suggest long-term commitment?", 
    isRedFlag: true 
  },
  // Walking Time Bomb Questions
  { 
    id: 501, 
    category: "The Walking Time Bomb", 
    text: "Frequent Yelling: Do they often raise their voice or shout during disagreements instead of discussing things calmly?", 
    isRedFlag: true 
  },
  { 
    id: 502, 
    category: "The Walking Time Bomb", 
    text: "Quick to Blame: When problems arise, do they immediately point fingers at you or others rather than taking responsibility?", 
    isRedFlag: true 
  },
  { 
    id: 503, 
    category: "The Walking Time Bomb", 
    text: "Silent Treatment: Do they give you the silent treatment as a way to punish you or avoid addressing issues?", 
    isRedFlag: true 
  },
  { 
    id: 504, 
    category: "The Walking Time Bomb", 
    text: "Escalation Over Resolution: During conflicts, do they tend to make situations worse by intensifying arguments instead of finding a solution?", 
    isRedFlag: true 
  },
  { 
    id: 505, 
    category: "The Walking Time Bomb", 
    text: "Emotional Outbursts: Are you often left feeling shaken or hurt after an emotional outburst from them?", 
    isRedFlag: true 
  },
  { 
    id: 506, 
    category: "The Walking Time Bomb", 
    text: "Defensive Reactions: When you try to bring up concerns, do they react defensively by escalating the situation rather than engaging in productive dialogue?", 
    isRedFlag: true 
  },
  { 
    id: 507, 
    category: "The Walking Time Bomb", 
    text: "Manipulative Silence: Do they use prolonged silence as a means to control or manipulate the outcome of a conversation?", 
    isRedFlag: true 
  },
  { 
    id: 508, 
    category: "The Walking Time Bomb", 
    text: "Unwillingness to Apologize: Do they rarely, if ever, apologize or acknowledge their role in conflicts, even when you point it out?", 
    isRedFlag: true 
  },
  { 
    id: 509, 
    category: "The Walking Time Bomb", 
    text: "Overgeneralizations: In arguments, do they often use sweeping statements like 'You always...' or 'You never...' to shut down the conversation?", 
    isRedFlag: true 
  },
  { 
    id: 510, 
    category: "The Walking Time Bomb", 
    text: "Recurring Conflict Patterns: Have you noticed that conflicts with them tend to follow the same explosive pattern, leaving issues unresolved?", 
    isRedFlag: true 
  },
  // Money Leech Questions
  { 
    id: 601, 
    category: "The Money Leech", 
    text: "Frequent Borrowing: Do they regularly ask to borrow money, even for basic expenses like food or gas?", 
    isRedFlag: true 
  },
  { 
    id: 602, 
    category: "The Money Leech", 
    text: "Never Paying Back: When they do borrow money, do they often 'forget' to pay you back or make excuses?", 
    isRedFlag: true 
  },
  { 
    id: 603, 
    category: "The Money Leech", 
    text: "Expecting You to Pay: Do they assume you'll always pick up the bill when you go out?", 
    isRedFlag: true 
  },
  { 
    id: 604, 
    category: "The Money Leech", 
    text: "No Financial Planning: Do they seem to have no savings, financial plan, or strategy for managing their money?", 
    isRedFlag: true 
  },
  { 
    id: 605, 
    category: "The Money Leech", 
    text: "Unstable Income: Are they frequently between jobs, struggling to keep steady work, or refusing to seek employment?", 
    isRedFlag: true 
  },
  { 
    id: 606, 
    category: "The Money Leech", 
    text: "Big Spender, No Funds: Do they spend money on luxury items, trips, or entertainment while still borrowing from you?", 
    isRedFlag: true 
  },
  { 
    id: 607, 
    category: "The Money Leech", 
    text: "Pressuring You for Money: Have they ever made you feel guilty or pressured you into lending them money?", 
    isRedFlag: true 
  },
  { 
    id: 608, 
    category: "The Money Leech", 
    text: "Excuses for Not Contributing: When it comes to shared expenses (rent, groceries, etc.), do they always have an excuse for why they can't pitch in?", 
    isRedFlag: true 
  },
  { 
    id: 609, 
    category: "The Money Leech", 
    text: "Avoiding Conversations About Money: Do they get defensive or change the subject when you bring up financial concerns?", 
    isRedFlag: true 
  },
  { 
    id: 610, 
    category: "The Money Leech", 
    text: "Making You Feel Like Their ATM: Do you feel like they see you more as a source of financial support than an equal partner?", 
    isRedFlag: true 
  },
  // Chaos Magnet Questions
  { 
    id: 701, 
    category: "The Chaos Magnet", 
    text: "Endless Drama: Do they always seem to have some major conflict with friends, family, or coworkers?", 
    isRedFlag: true 
  },
  { 
    id: 702, 
    category: "The Chaos Magnet", 
    text: "Frequent Financial Crises: Are they constantly broke, in debt, or struggling to pay for basic needs?", 
    isRedFlag: true 
  },
  { 
    id: 703, 
    category: "The Chaos Magnet", 
    text: "Legal Issues: Have they been in legal trouble more than once (lawsuits, fines, arrests, etc.)?", 
    isRedFlag: true 
  },
  { 
    id: 704, 
    category: "The Chaos Magnet", 
    text: "Job Instability: Do they frequently lose jobs, quit impulsively, or struggle to hold down steady work?", 
    isRedFlag: true 
  },
  { 
    id: 705, 
    category: "The Chaos Magnet", 
    text: "Toxic Relationships: Do they have a history of chaotic or abusive romantic relationships?", 
    isRedFlag: true 
  },
  { 
    id: 706, 
    category: "The Chaos Magnet", 
    text: "Always the Victim: Do they often blame others for their problems instead of taking responsibility?", 
    isRedFlag: true 
  },
  { 
    id: 707, 
    category: "The Chaos Magnet", 
    text: "Unpredictable Mood Swings: Are their emotions all over the place, making it hard to predict how they'll react to situations?", 
    isRedFlag: true 
  },
  { 
    id: 708, 
    category: "The Chaos Magnet", 
    text: "Reckless Decision-Making: Do they often make impulsive choices that lead to unnecessary problems?", 
    isRedFlag: true 
  },
  { 
    id: 709, 
    category: "The Chaos Magnet", 
    text: "Dragging You Into Their Mess: Do you find yourself constantly trying to help, fix, or rescue them from their own bad decisions?", 
    isRedFlag: true 
  },
  { 
    id: 710, 
    category: "The Chaos Magnet", 
    text: "Crisis After Crisis: Does it feel like they're always dealing with some major crisis—never a calm period in their life?", 
    isRedFlag: true 
  },
  // History Haunter Questions
  { 
    id: 801, 
    category: "The History Haunter", 
    text: "Frequent Mention of Exes: Do they bring up their ex in conversations regularly, even when it's not relevant?", 
    isRedFlag: true 
  },
  { 
    id: 802, 
    category: "The History Haunter", 
    text: "Comparisons to Past Relationships: Have they ever compared you (positively or negatively) to a past partner?", 
    isRedFlag: true 
  },
  { 
    id: 803, 
    category: "The History Haunter", 
    text: "Unfinished Business: Do they still communicate with an ex in a way that makes you uncomfortable or secretive?", 
    isRedFlag: true 
  },
  { 
    id: 804, 
    category: "The History Haunter", 
    text: "Emotional Attachment to the Past: Do they seem emotionally stuck in a past relationship, reminiscing about how 'great' or 'terrible' it was?", 
    isRedFlag: true 
  },
  { 
    id: 805, 
    category: "The History Haunter", 
    text: "Bringing Up Exes During Fights: Do they mention their ex when you argue, implying that you're making the same mistakes or not as good as their past partner?", 
    isRedFlag: true 
  },
  { 
    id: 806, 
    category: "The History Haunter", 
    text: "Keeping Ex's Stuff: Do they still hold onto sentimental items, gifts, or mementos from their ex that they refuse to let go of?", 
    isRedFlag: true 
  },
  { 
    id: 807, 
    category: "The History Haunter", 
    text: "Comparing Your Relationship Timeline: Have they ever pressured you into things (commitment, moving in, etc.) because 'with my ex, we did it sooner'?", 
    isRedFlag: true 
  },
  { 
    id: 808, 
    category: "The History Haunter", 
    text: "Following Exes Closely: Are they overly invested in their ex's life, constantly checking their social media or talking about what they're up to?", 
    isRedFlag: true 
  },
  { 
    id: 809, 
    category: "The History Haunter", 
    text: "Recycling Relationship Patterns: Do they seem to be repeating the same behaviors, expectations, or issues from past relationships with you?", 
    isRedFlag: true 
  },
  { 
    id: 810, 
    category: "The History Haunter", 
    text: "Lack of Emotional Presence: Do you ever feel like they are physically with you, but mentally and emotionally stuck in the past?", 
    isRedFlag: true 
  },
  // Double Life Questions
  { 
    id: 901, 
    category: "The Double Life", 
    text: "Secret Social Media Activity: Do they have hidden or alternate social media accounts they haven't told you about?", 
    isRedFlag: true 
  },
  { 
    id: 902, 
    category: "The Double Life", 
    text: "Unexplained Disappearances: Do they frequently disappear for hours or even days without giving a clear explanation?", 
    isRedFlag: true 
  },
  { 
    id: 903, 
    category: "The Double Life", 
    text: "Conflicting Stories: Have they ever given you different versions of the same event, making you question what's true?", 
    isRedFlag: true 
  },
  { 
    id: 904, 
    category: "The Double Life", 
    text: "Avoiding Public Appearances with You: Do they seem hesitant or even refuse to be seen in public with you?", 
    isRedFlag: true 
  },
  { 
    id: 905, 
    category: "The Double Life", 
    text: "Phone and Messages Secrecy: Do they guard their phone, change passwords often, or get defensive if you ask about their messages?", 
    isRedFlag: true 
  },
  { 
    id: 906, 
    category: "The Double Life", 
    text: "Unusual Work or Travel Excuses: Do they often claim they have to work late, travel unexpectedly, or have last-minute 'emergencies' that seem suspicious?", 
    isRedFlag: true 
  },
  { 
    id: 907, 
    category: "The Double Life", 
    text: "Hiding Their Living Situation: Are they secretive about where they live or refuse to let you visit their home?", 
    isRedFlag: true 
  },
  { 
    id: 908, 
    category: "The Double Life", 
    text: "Different Names or Identities: Have they ever used a different name, lied about their job, or given misleading information about their background?", 
    isRedFlag: true 
  },
  { 
    id: 909, 
    category: "The Double Life", 
    text: "Friends or Family Acting Strange: Do their friends or family seem to know things you don't, or act awkward when you ask about them?", 
    isRedFlag: true 
  },
  { 
    id: 910, 
    category: "The Double Life", 
    text: "Gut Feeling Something's Off: Do you have a constant gut feeling that they're hiding something, even if you can't prove it?", 
    isRedFlag: true 
  },
  // Danger Zone Questions
  { 
    id: 1001, 
    category: "The Danger Zone", 
    text: "Physical Threats: Have they ever threatened to harm you, even if they claim they're 'just joking'?", 
    isRedFlag: true 
  },
  { 
    id: 1002, 
    category: "The Danger Zone", 
    text: "Intimidation Tactics: Do they try to intimidate you through aggressive gestures, breaking things, or threatening looks?", 
    isRedFlag: true 
  },
  { 
    id: 1003, 
    category: "The Danger Zone", 
    text: "Verbal Abuse: Do they frequently insult you, call you names, or deliberately try to humiliate you?", 
    isRedFlag: true 
  },
  { 
    id: 1004, 
    category: "The Danger Zone", 
    text: "Physical Contact: Have they ever pushed, grabbed, or physically restrained you during arguments?", 
    isRedFlag: true 
  },
  { 
    id: 1005, 
    category: "The Danger Zone", 
    text: "Threat Extensions: Do they threaten to harm people or things you care about (family, pets, possessions)?", 
    isRedFlag: true 
  },
  { 
    id: 1006, 
    category: "The Danger Zone", 
    text: "Coercion: Do they pressure or force you into doing things you're not comfortable with?", 
    isRedFlag: true 
  },
  { 
    id: 1007, 
    category: "The Danger Zone", 
    text: "Isolation Attempts: Do they try to cut you off from family and friends or monitor all your communications?", 
    isRedFlag: true 
  },
  { 
    id: 1008, 
    category: "The Danger Zone", 
    text: "Extreme Jealousy: Do they display extreme possessiveness or accuse you of cheating without any basis?", 
    isRedFlag: true 
  },
  { 
    id: 1009, 
    category: "The Danger Zone", 
    text: "Financial Control: Do they control your access to money or important documents as a way to maintain power over you?", 
    isRedFlag: true 
  },
  { 
    id: 1010, 
    category: "The Danger Zone", 
    text: "Escalating Behavior: Have you noticed their controlling or aggressive behavior getting worse over time?", 
    isRedFlag: true 
  },
  // Escape Artist Questions
  { 
    id: 301, 
    category: "The Escape Artist", 
    text: "Commitment Avoidance: Do they consistently avoid discussions about the future of your relationship?", 
    isRedFlag: true 
  },
  { 
    id: 302, 
    category: "The Escape Artist", 
    text: "Mixed Signals: Do they send confusing messages about their feelings or intentions?", 
    isRedFlag: true 
  },
  { 
    id: 303, 
    category: "The Escape Artist", 
    text: "Emotional Distance: When things get emotionally intimate, do they pull away or become unavailable?", 
    isRedFlag: true 
  },
  { 
    id: 304, 
    category: "The Escape Artist", 
    text: "Past Pattern: Do they have a history of leaving relationships when they become serious?", 
    isRedFlag: true 
  },
  { 
    id: 305, 
    category: "The Escape Artist", 
    text: "Excuse Making: Do they frequently make excuses to avoid spending quality time together?", 
    isRedFlag: true 
  },
  { 
    id: 306, 
    category: "The Escape Artist", 
    text: "Fear of Labels: Are they resistant to defining the relationship or using terms like 'partner' or 'couple'?", 
    isRedFlag: true 
  },
  { 
    id: 307, 
    category: "The Escape Artist", 
    text: "Ghosting Tendency: Have they disappeared for periods without explanation, then reappeared as if nothing happened?", 
    isRedFlag: true 
  },
  { 
    id: 308, 
    category: "The Escape Artist", 
    text: "Surface Level: Do they keep conversations superficial and avoid deeper emotional discussions?", 
    isRedFlag: true 
  },
  { 
    id: 309, 
    category: "The Escape Artist", 
    text: "Independence Obsession: Do they prioritize their 'independence' to an extreme, even in reasonable relationship situations?", 
    isRedFlag: true 
  },
  { 
    id: 310, 
    category: "The Escape Artist", 
    text: "Future Flinching: When you bring up future plans, do they change the subject or become visibly uncomfortable?", 
    isRedFlag: true 
  }
]

