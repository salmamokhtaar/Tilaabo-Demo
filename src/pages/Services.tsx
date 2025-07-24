import ServiceCard from "@/components/ServiceCard";
import { 
  TrendingUp, 
  Building2, 
  FileText, 
  BarChart3, 
  GraduationCap 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Transform your organization with data-driven strategies and actionable insights",
      icon: TrendingUp,
      features: [
        "Organizational strategy & transformation",
        "Institutional development",
        "Visioning, planning, and restructuring",
        "Performance improvement strategies",
        "Market analysis and competitive positioning",
        "Digital transformation roadmaps"
      ]
    },
    {
      title: "Governance & Public Sector Reform",
      description: "Strengthen institutional frameworks and improve public service delivery",
      icon: Building2,
      features: [
        "Policy analysis and advisory",
        "Capacity building for government institutions",
        "Decentralization and local governance",
        "Anti-corruption strategies",
        "Transparency and accountability systems",
        "Citizen engagement mechanisms"
      ]
    },
    {
      title: "Research & Policy Development",
      description: "Evidence-based research and policy solutions for complex challenges",
      icon: FileText,
      features: [
        "Socioeconomic and political research",
        "Baseline, midline, and endline surveys",
        "Public policy and sectoral research",
        "Impact assessment studies",
        "Stakeholder consultation processes",
        "Policy implementation frameworks"
      ]
    },
    {
      title: "Monitoring, Evaluation & Learning",
      description: "Comprehensive MEL systems to track progress and maximize impact",
      icon: BarChart3,
      features: [
        "MEL framework design",
        "Results measurement systems",
        "Data collection and analysis",
        "Impact evaluation studies",
        "Learning and adaptation strategies",
        "Performance dashboard development"
      ]
    },
    {
      title: "Training & Capacity Building",
      description: "Empower your team with skills and knowledge for sustained success",
      icon: GraduationCap,
      features: [
        "Leadership and management training",
        "Technical skills development",
        "Customized workshops for NGOs, CSOs, and public servants",
        "Mentoring and coaching",
        "Institutional strengthening",
        "Knowledge management systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Results-driven solutions in governance, strategy, research, and development
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our step-by-step methodology ensures deep understanding of context, collaborative design, 
              evidence-based implementation, and long-term institutional strengthening.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your strategic objectives 
              and build lasting capacity for success.
            </p>
            <button 
              onClick={() => window.location.hash = "/contact"}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;