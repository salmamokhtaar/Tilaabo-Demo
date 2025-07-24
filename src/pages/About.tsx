import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Lightbulb, Building, GraduationCap, TrendingUp, Shield, Trees, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We act with honesty and accountability in all our engagements"
    },
    {
      icon: Award,
      title: "Impact",
      description: "We focus on results that create lasting change"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working together for stronger outcomes"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue high standards in everything we do"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We bring fresh ideas grounded in local realities"
    }
  ];

  const sectors = [
    {
      icon: Building,
      title: "Governance & Public Administration",
      description: "Strengthening institutional frameworks and public service delivery"
    },
    {
      icon: GraduationCap,
      title: "Education & Youth Development",
      description: "Building educational capacity and empowering young leaders"
    },
    {
      icon: TrendingUp,
      title: "Economic Growth & Livelihoods",
      description: "Supporting sustainable economic development and job creation"
    },
    {
      icon: Shield,
      title: "Health & Social Protection",
      description: "Improving healthcare systems and social safety nets"
    },
    {
      icon: Handshake,
      title: "Peacebuilding & Conflict Resolution",
      description: "Promoting peace and stability through dialogue and mediation"
    },
    {
      icon: Trees,
      title: "Climate & Natural Resource Management",
      description: "Addressing climate challenges and sustainable resource use"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tilaabo Consulting</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Forward-focused consulting committed to guiding organizations through transformation
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Tilaabo Consulting is a forward-focused consulting firm committed to guiding organizations, 
                institutions, and governments through every critical step of their transformation journey. 
                Derived from the Somali word "Tilaabo", meaning "step", our name reflects our core belief: 
                meaningful progress happens one well-planned step at a time.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We offer results-driven solutions in governance, strategy, research, and development – 
                empowering our clients to achieve sustainable impact across the Horn of Africa and beyond. 
                Our team combines international best practices with deep local understanding to deliver 
                context-specific solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                From government institutions to international organizations, from NGOs to private sector entities, 
                we have helped numerous clients achieve their strategic objectives through our step-by-step methodology 
                that ensures deep understanding of context, collaborative design, evidence-based implementation, 
                and long-term institutional strengthening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/10 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg leading-relaxed">
                  To be the most trusted partner in driving transformative change across the Horn of Africa 
                  and beyond – one strategic step at a time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/10 hover:border-accent/20 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-accent">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg leading-relaxed">
                  To deliver innovative, evidence-based, and context-specific consulting services that 
                  empower institutions, communities, and enterprises to thrive.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Sectors We Serve</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work across diverse sectors to create meaningful impact throughout the Horn of Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-primary group-hover:text-primary-light transition-colors">
                      {sector.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {sector.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Team & Expertise</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <p className="text-lg text-center text-muted-foreground leading-relaxed mb-6">
                  Our team includes policy experts, economists, governance specialists, researchers, and project managers 
                  with national and regional experience across East Africa and the Horn of Africa.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Multidisciplinary</h3>
                    <p className="text-sm text-muted-foreground">Diverse expertise across sectors and disciplines</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-accent mb-2">Experienced</h3>
                    <p className="text-sm text-muted-foreground">Proven track record across the region</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Innovative</h3>
                    <p className="text-sm text-muted-foreground">Fresh approaches to complex challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;