import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Building2, 
  FileText, 
  BarChart3, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Award
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Data-driven strategies for organizational transformation",
      icon: TrendingUp,
    },
    {
      title: "Governance & Reform",
      description: "Strengthen institutions and improve service delivery",
      icon: Building2,
    },
    {
      title: "Research & Policy",
      description: "Evidence-based solutions for complex challenges",
      icon: FileText,
    },
    {
      title: "MEL Systems",
      description: "Comprehensive monitoring and evaluation frameworks",
      icon: BarChart3,
    },
    {
      title: "Capacity Building",
      description: "Training and development for lasting impact",
      icon: GraduationCap,
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Organizations Served", icon: Users },
    { number: "10+", label: "Countries Reached", icon: Globe },
    { number: "15+", label: "Years Combined Experience", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-white/5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Driving Transformative Change,{" "}
              <span className="text-accent">One Step at a Time</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Forward-focused consulting committed to guiding organizations, institutions, and governments 
              through every critical step of their transformation journey across the Horn of Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.hash = "/contact"}
                className="bg-accent text-accent-foreground hover:bg-accent-light font-semibold text-lg px-8 py-4 group"
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.hash = "/services"}
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-4"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Transforming the Horn of Africa Through Strategic Partnership
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Derived from the Somali word "Tilaabo", meaning "step", our name reflects our core belief: 
                  meaningful progress happens one well-planned step at a time. We offer results-driven solutions 
                  in governance, strategy, research, and development.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With locally informed, globally tested methods, we empower institutions, communities, 
                  and enterprises to thrive through innovative, evidence-based, and context-specific consulting services.
                </p>
                <Button 
                  onClick={() => window.location.hash = "/about"}
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-primary mb-2">Results-Driven</h3>
                      <p className="text-sm text-muted-foreground">Focused on outcomes that create lasting change</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-accent mb-2">Culturally Rooted</h3>
                      <p className="text-sm text-muted-foreground">Globally minded, locally informed approach</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-primary mb-2">Evidence-Based</h3>
                      <p className="text-sm text-muted-foreground">Innovative solutions grounded in research</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-accent mb-2">Step-by-Step</h3>
                      <p className="text-sm text-muted-foreground">Methodical approach ensuring success</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Core Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to drive transformation and build lasting capacity 
              across your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.location.hash = "/services"}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your challenges and explore how our expertise can help you achieve 
              your strategic objectives and build lasting capacity.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.hash = "/contact"}
              className="bg-accent text-accent-foreground hover:bg-accent-light font-semibold text-lg px-8 py-4"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
