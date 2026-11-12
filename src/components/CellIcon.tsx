import {
  Anchor,
  Apple,
  Award,
  BookOpen,
  Building,
  Castle,
  Church,
  Compass,
  Crown,
  Droplets,
  Feather,
  Flame,
  Footprints,
  Gem,
  Heart,
  Landmark,
  Layers,
  MapPin,
  Mountain,
  Palette,
  Shield,
  Sparkles,
  Sun,
  Sword,
  Trees,
  Utensils,
  Wheat,
  Wind,
} from 'lucide-react';

interface CellIconProps {
  name: string;
  image?: string;
  alt: string;
  color?: string;
}

export function CellIcon({ name, image, alt, color = '#C84B31' }: CellIconProps) {
  // If clean spot image provided, show it
  if (image) {
    return (
      <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl border border-amber-900/10 bg-white p-0.5 shadow-sm">
        <img src={image} alt={alt} className="h-full w-full object-cover rounded-lg" loading="lazy" />
      </div>
    );
  }

  // Minimalist crisp vector icon
  const getIcon = () => {
    switch (name) {
      case 'castle':
      case 'alcazar':
        return <Castle className="h-6 w-6 text-amber-700" />;
      case 'river':
      case 'canal':
        return <Droplets className="h-6 w-6 text-sky-600" />;
      case 'painter':
      case 'palette':
        return <Palette className="h-6 w-6 text-purple-600" />;
      case 'sword':
        return <Sword className="h-6 w-6 text-slate-700" />;
      case 'sweet':
      case 'food':
        return <Utensils className="h-6 w-6 text-amber-600" />;
      case 'cultures':
        return <Layers className="h-6 w-6 text-emerald-700" />;
      case 'bridge':
        return <Landmark className="h-6 w-6 text-stone-700" />;
      case 'cathedral':
      case 'church':
        return <Church className="h-6 w-6 text-indigo-700" />;
      case 'shield':
      case 'flag':
        return <Shield className="h-6 w-6 text-red-600" />;
      case 'lion':
        return <Sparkles className="h-6 w-6 text-amber-600" />;
      case 'fruit':
      case 'pomegranate':
        return <Apple className="h-6 w-6 text-rose-600" />;
      case 'mountain':
        return <Mountain className="h-6 w-6 text-slate-600" />;
      case 'garden':
      case 'tree':
        return <Trees className="h-6 w-6 text-emerald-600" />;
      case 'mosaic':
        return <Gem className="h-6 w-6 text-teal-600" />;
      case 'bell':
        return <Award className="h-6 w-6 text-amber-600" />;
      case 'crown':
      case 'reyes':
        return <Crown className="h-6 w-6 text-amber-500" />;
      case 'towers':
        return <Building className="h-6 w-6 text-cobalt" />;
      case 'dragon':
        return <Flame className="h-6 w-6 text-emerald-600" />;
      case 'nature':
        return <Trees className="h-6 w-6 text-green-600" />;
      case 'windmill':
        return <Wind className="h-6 w-6 text-amber-700" />;
      case 'donkey':
        return <Footprints className="h-6 w-6 text-stone-600" />;
      case 'book':
        return <BookOpen className="h-6 w-6 text-amber-800" />;
      case 'quill':
        return <Feather className="h-6 w-6 text-amber-900" />;
      case 'wheat':
        return <Wheat className="h-6 w-6 text-amber-500" />;
      case 'arches':
        return <Landmark className="h-6 w-6 text-blue-700" />;
      case 'plaza':
        return <MapPin className="h-6 w-6 text-red-500" />;
      case 'aqueduct':
        return <Landmark className="h-6 w-6 text-sky-800" />;
      case 'infanta':
        return <Heart className="h-6 w-6 text-pink-600" />;
      case 'king':
        return <Crown className="h-6 w-6 text-amber-600" />;
      case 'prado':
        return <Building className="h-6 w-6 text-red-700" />;
      case 'shell':
        return <Sparkles className="h-6 w-6 text-amber-500" />;
      case 'staff':
        return <Footprints className="h-6 w-6 text-emerald-800" />;
      case 'lantern':
        return <Sun className="h-6 w-6 text-amber-500" />;
      case 'courtyard':
        return <Trees className="h-6 w-6 text-emerald-600" />;
      case 'caravels':
      case 'boat':
        return <Anchor className="h-6 w-6 text-sky-700" />;
      case 'compass':
        return <Compass className="h-6 w-6 text-amber-700" />;
      case 'tiles':
        return <Gem className="h-6 w-6 text-blue-600" />;
      default:
        return <Sparkles className="h-6 w-6 text-amber-600" />;
    }
  };

  return (
    <div
      className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-parchment border border-amber-900/10 shadow-sm"
      style={{ backgroundColor: `${color}15` }}
    >
      {getIcon()}
    </div>
  );
}
