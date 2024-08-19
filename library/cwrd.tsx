export class cwrd{
    http =require('http');
    private static tok:string = "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";
    static async tulis(filePath:string, content:string, message:string) {
        const existingFile = await cwrd.baca( filePath);
        let shas;
        if (existingFile != null) {
            shas = existingFile.sha;
        }else{
            shas = null;
        }
        try {
          const fileData = {
            message: message,
            content: btoa(content), // Encode content to base64
            sha:shas
          };
      
          const response = await fetch(`https://api.github.com/repos/Try768/Container/contents/${filePath}`, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${cwrd.tok}`,
              'Accept': 'application/vnd.github+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fileData),
          });
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error:', error);
        }
      }
      static async baca( filePath:string) {
        const response = await fetch(`https://api.github.com/repos/Try768/Container/contents/${filePath}`, {
          headers: {
            'Authorization': `token ${cwrd.tok}`,
            'Accept': 'application/vnd.github+json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          return data;
        } else if (response.status === 404) {
          // File belum ada, return null
          return null;
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      }
      static async hapus( filePath:string, message:string) {
        const kc = await cwrd.baca(filePath);
        let sha;
        if(kc != null){
            sha=kc.sha;
        }else{
            sha = null;
        }
        const deleteData = {
          message: message,
          sha: sha,
        };
      
        const response = await fetch(`https://api.github.com/repos/Try768/Container/contents/${filePath}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `token ${cwrd.tok}`,
            'Accept': 'application/vnd.github+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(deleteData),
        });
      
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      }
      
}
