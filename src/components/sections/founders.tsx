
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const founders = [
    {
        name: "Mehdi MARSAMAN",
        title: "Le Maître Technologue",
        description: "Pilier technique et stratège de la MAD Academy, Mehdi est un expert passionné des technologies qui construisent les expériences interactives. Sa force réside dans sa capacité à maîtriser à la fois les moteurs de jeux (Unity, Unreal) et les architectures web complexes. Il est convaincu qu'une base technique solide est le socle sur lequel repose toute grande ambition créative."
    },
    {
        name: "Anas KADIM",
        title: "L'Artiste du Mouvement",
        description: "Force motrice de la dynamique visuelle de la MAD Academy, Anas est un spécialiste du motion design et des effets visuels. Passionné par l'art de donner vie à l'image, il maîtrise des outils comme After Effects pour créer des expériences qui captivent et émerveillent. Pour lui, le mouvement n'est pas un simple ajout, mais un langage à part entière qui amplifie l'émotion et l'impact d'une création."
    },
    {
        name: "Doha EL BOUDALI",
        title: "L'Âme Créative",
        description: "Cœur artistique et force narrative de la MAD Academy, Doha est une spécialiste du world building et de l'expérience utilisateur. Elle croit fondamentalement que les jeux les plus mémorables sont ceux qui parviennent à créer une connexion émotionnelle profonde avec le joueur. Son approche est centrée sur l'art, le design et la psychologie de l'engagement."
    }
];

export const FoundersSection = () => {
    return (
        <section id="founders" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                        Les Fondateurs
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
                        L'âme de la MAD Academy ne réside pas seulement dans son programme, mais dans l'alchimie de ses trois fondateurs : Mehdi Marsaman, Anas Kadim et Doha El Boudali. Plus que des créateurs, ils sont les trois visions complémentaires dont l'union forme l'acronyme et la philosophie "MAD". Leur parcours et leur expertise respectifs sont les piliers sur lesquels repose notre approche unique de l'enseignement de la création de jeux.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {founders.map((founder, index) => (
                        <Card key={index} className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border hover:border-primary hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{founder.name}</CardTitle>
                                <p className="text-primary font-medium">{founder.title}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{founder.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
