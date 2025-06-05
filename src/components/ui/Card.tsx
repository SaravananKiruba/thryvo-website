interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function Card({
  title,
  description,
  children,
  className = '',
  imageUrl,
  imageAlt = '',
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
}
