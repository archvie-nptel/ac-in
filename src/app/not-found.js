"use client"
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);
  if(!pathname.includes('archive.nptel.ac.in'))
    return(
      <div style={{ textAlign: 'center'}}>
      <h1 style={{
        fontSize: '2vw', // Responsive font size based on viewport width
        whiteSpace: 'nowrap', // Ensure the text stays on one line
        overflow: 'hidden', // Prevent overflow issues
        textOverflow: 'ellipsis', // Add ellipsis if the text overflows
      }}>
      404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      
    </div>
  )

  else if(pathname.includes('/archive.nptel.ac.in/noc/Ecertificate/'))
    return(
      <div style={{ textAlign: 'center'}}>
      <h2 style={{
        fontSize: '2vw', // Responsive font size based on viewport width
        whiteSpace: 'nowrap', // Ensure the text stays on one line
        overflow: 'hidden', // Prevent overflow issues
        textOverflow: 'ellipsis', // Add ellipsis if the text overflows
      }}>
      Sorry you don’t have a Certificate!.Please contact support@nptel.iitm.ac.in.
      </h2>
    </div>);
  else
  return (
    <div style={{ marginTop: '90px' }}>
      <header></header>
      <div className="container">
        <div className="col-md-12">
          <h2 style={{ fontSize: '2vw', color: 'red', fontWeight: 'bold', textAlign: 'center' }}>
            We have changed our links. Please go to{' '}
            <a
              href="https://archive.nptel.ac.in/course.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue', textDecoration: 'none' }}
            >
              https://archive.nptel.ac.in/course.html
            </a>{' '}
            <br></br>and update your bookmarks.
          </h2>
        </div>
      </div>
    </div>
  );
}
