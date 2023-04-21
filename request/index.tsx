// for abmission section
export async function Aboutmissions() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=aboutmission`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

// for hero section
export async function getBlogs() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=hero`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

// for Category section
export async function Category() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=category`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

// for Started section
export async function Start() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=start`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

// for Started section
export async function Auth() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=authors`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}