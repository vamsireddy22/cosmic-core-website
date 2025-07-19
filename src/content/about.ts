export interface AboutContent {
  companyInfo: {
    name: string;
    founded: string;
    description: string;
    mission: string;
    vision: string;
  };
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  milestones: Array<{
    year: string;
    title: string;
    description: string;
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export const aboutContent: AboutContent = {
  companyInfo: {
    name: "Cosmic Core Technologies",
    founded: "2025",
    description: "Cosmic Core Technologies is a leading technology education platform dedicated to empowering individuals with the skills and knowledge needed to thrive in the digital economy. We believe that quality education should be accessible, practical, and career-focused.",
    mission: "To democratize technology education by providing world-class learning experiences that bridge the gap between traditional education and industry demands.",
    vision: "To become the global leader in technology education, creating a world where anyone can learn, grow, and succeed in the tech industry regardless of their background or location."
  },
  values: [
    {
      title: "Excellence",
      description: "We maintain the highest standards in our curriculum, instruction, and student support to ensure exceptional learning outcomes.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "We continuously evolve our teaching methods and technology to stay ahead of industry trends and provide cutting-edge education.",
      icon: "🚀"
    },
    {
      title: "Accessibility",
      description: "We believe education should be available to everyone, regardless of their background, location, or financial situation.",
      icon: "🌍"
    },
    {
      title: "Community",
      description: "We foster a supportive learning community where students can connect, collaborate, and grow together.",
      icon: "🤝"
    },
    {
      title: "Practicality",
      description: "We focus on real-world applications and hands-on projects that prepare students for actual industry challenges.",
      icon: "💼"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our interactions and educational offerings.",
      icon: "✨"
    }
  ],
  milestones: [
    {
      year: "2018",
      title: "Company Founded",
      description: "Cosmic Core Technologies was established with a vision to revolutionize technology education."
    },
    {
      year: "2019",
      title: "First 100 Students",
      description: "Reached our first milestone of 100 enrolled students across various courses."
    },
    {
      year: "2020",
      title: "Online Platform Launch",
      description: "Launched our comprehensive online learning platform with interactive features."
    },
    {
      year: "2021",
      title: "Industry Partnerships",
      description: "Established partnerships with leading tech companies for internships and job placements."
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Expanded our reach to serve students from over 50 countries worldwide."
    },
    {
      year: "2023",
      title: "AI-Powered Learning",
      description: "Integrated AI-driven personalized learning experiences into our platform."
    }
  ],
  stats: [
    { number: "10,000+", label: "Students Worldwide" },
    { number: "200+", label: "Expert Instructors" },
    { number: "50+", label: "Countries Served" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "500+", label: "Corporate Partners" },
    { number: "1000+", label: "Projects Completed" }
  ]
}; 